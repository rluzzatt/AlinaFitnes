# Homepage top and Alina introduction — 2026-09-08

Focused implementing-agent review. Reuses the existing neutral hero, service-card, typography, palette, spacing, RTL and About layout.

- Updated hero supporting copy exactly as supplied; kept the neutral portrait and headline. On phones its frame is 8:7 instead of square, reducing image height 12.5%; a 30% focal position retains Alina’s face and heart gesture.
- Added existing training and clinic photographs to the two cards with identical 8:5 image ratio, layout, padding, typography and CTA style. New CTA labels match the user request. No selected service or tabs.
- Removed the entire מצאו את המרחב שלכם block and its duplicate descriptions, links and logo lockup. Removed CSS specific to that deleted block. אני אלינה immediately follows the cards, keeps its prominent opening line and uses the exact four supplied body paragraphs.
- Header, sticky WhatsApp component and all JavaScript are unchanged. DOM comparison against f4bf01d confirms unchanged strength, breathing, testimonials, contact and footer sections.

Six widths (320, 393, 600, 800, 844 and 1440px) passed: equal card dimensions, identical image ratios/heights and styling, both CTAs 54px tall, no horizontal overflow, correct section order, exact copy, both service links and mobile return-home behavior. Two axe scans returned zero violations and there were no script errors. Visual review covered the phone hero, desktop/stacked cards and Alina copy. Evidence: ignored .qa/intro-* scripts, reports and captures. Chromium viewport emulation, not a physical-phone or Safari test.
