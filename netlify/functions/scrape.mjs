// netlify/functions/scrape.mjs
// Fetches a job posting URL, extracts readable text, returns it to the frontend

export default async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405, headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const { url } = await req.json();

    if (!url || !url.startsWith("http")) {
      return new Response(JSON.stringify({ error: "Invalid URL" }), {
        status: 400, headers: { "Content-Type": "application/json" }
      });
    }

    // Fetch the page
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9"
      },
      redirect: "follow"
    });

    if (!res.ok) {
      return new Response(JSON.stringify({ error: `Failed to fetch URL (${res.status})` }), {
        status: 502, headers: { "Content-Type": "application/json" }
      });
    }

    const html = await res.text();

    // Strip HTML to readable text
    // Remove script/style/nav/header/footer tags and their content
    let text = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, " ")
      .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, " ")
      .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, " ")
      .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, " ")
      .replace(/<aside[^>]*>[\s\S]*?<\/aside>/gi, " ");

    // Convert common block elements to newlines
    text = text
      .replace(/<\/?(p|div|br|h[1-6]|li|tr|section|article)[^>]*>/gi, "\n")
      .replace(/<[^>]+>/g, " ")               // strip remaining tags
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/&lt;/gi, "<")
      .replace(/&gt;/gi, ">")
      .replace(/&#\d+;/g, " ")
      .replace(/&\w+;/g, " ")
      .replace(/[ \t]+/g, " ")                // collapse spaces
      .replace(/\n\s*\n/g, "\n\n")            // collapse blank lines
      .trim();

    // Limit to ~8000 chars (plenty for a job posting)
    if (text.length > 8000) {
      text = text.substring(0, 8000) + "\n\n[Truncated]";
    }

    if (text.length < 50) {
      return new Response(JSON.stringify({
        error: "Could not extract meaningful text from this page. The site may require JavaScript to render or may be blocking automated access. Try pasting the job posting text manually."
      }), { status: 422, headers: { "Content-Type": "application/json" } });
    }

    return new Response(JSON.stringify({ text }), {
      status: 200, headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({
      error: `Failed to fetch: ${err.message}. Try pasting the text manually.`
    }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
};

export const config = {
  path: "/api/scrape"
};
