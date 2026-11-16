# Reelpass

Share an Instagram reel or X post to this app, tap a person, and WhatsApp opens on their chat with a link.
The link shows just that one post using the platforms' own public embed players, so the person watching
needs no app and no account.

- Static site, no backend, no database. The link itself carries the post ID (`?r=<reel>`, `?p=<post>`, `?x=<tweet>`).
- Nothing is downloaded or re-uploaded; video streams straight from Instagram / X to the viewer.
- Contacts are kept in the sender's browser only (`localStorage`).

Host it on GitHub Pages: Settings → Pages → Deploy from a branch → `main` / root.
