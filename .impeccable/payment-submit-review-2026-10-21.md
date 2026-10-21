# Payment submit — approved release, 21 October 2026

Release authorized after local review: the user's “כן, בוא ניישם את זה” approves publishing the final payment-submit flow and shortened copy. This supersedes the local-only notes recorded during preparation below. Final verification covers deployment and the live UI, without submitting personal details or making payments.

The second pre-submit reminder (“המעבר לאפליקציה אינו מבצע תשלום...”) was also removed as redundant at the user's next refinement. Keep transfer-completion instructions in the acknowledged-intake state, where visitors need them. Before submitting, retain the introductory price/confirmation sentence, existing privacy information and the two explicit submit/payment buttons.

Latest user refinement: remove the extra “הפרטים עדיין לא נשלחו” paragraph in full; the introductory payment sentence and explicit submit/payment button labels already explain the flow. This supersedes the earlier requirement to repeat that explanation above the buttons. Submission behavior remains unchanged. Local only.

User copy refinement, same day: public wording now says “המקום יאושר לאחר קבלת התשלום.” Remove references to Alina checking the transfer from the intro, received-state guidance and local preview copy. Manual verification remains operationally unchanged. This wording is local and not published.

Requested behavior: typing personal details does not submit them. Two native submit buttons choose bit or PayBox and initiate intake plus payment handoff. The website cannot verify completion inside either app; accepted intake is pending verification, not a paid booking.

Implementation is local and uncommitted. No push, production submission, actual app opening or payment was performed. Preview: http://127.0.0.1:4399/index.html?retreat=preview#retreat-registration. Default loopback preview simulates intake and replaces payment destinations with local links; QA reject mode posts only to the loopback server, which discards request bodies.

Verified in the connected browser: required fields block an empty form; bit preview succeeds without external navigation; PayBox reject mode retains the entered fields, exposes retry and does not show success. After intake, only the selected payment recovery link appears. Form reset clears details for another person. Default desktop and 393×852 phone views were inspected; no horizontal overflow, 16px action text, equal 78px phone buttons after fixing the inherited flex layout. Viewport override was reset.

Eight isolated VM tests run the actual production submit handler: success for both methods, no acknowledged intake, HTTP rejection, missing/unknown method, invalid form, local preview and blocked popup. They verify pending metadata, no early payment navigation, no PII or Purchase in Meta, and no network or popup in local preview. All pass. JavaScript syntax and git diff whitespace checks pass. The detector was run once; its unrelated pre-existing site/style-sidecar advisories were left outside this scoped refinement.

Proof images (aggregate UI only, no participant information):
- C:/Users/dushi/Documents/Marketing/output/mamalina-payment-submit-desktop-2026-10-21.png
- C:/Users/dushi/Documents/Marketing/output/mamalina-payment-submit-mobile-2026-10-21.png

Local review is complete and release is authorized. Actual bit/PayBox app handoff on a real phone remains a separate integration check; no completed or verified payment is implied by the local tests.
