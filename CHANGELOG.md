# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 13.12.2022

### Breaking Changes:

* CTA Button: We've added a new default implementation that is more robust among different clients. As a consequence, rounded corners in Outlook are no longer supported. If you intend to keep the previous implementation, set 'buttonLegacyVml: true' in the properties.js
* Dark Footer Layout: the dark background color now spans over the entire width, which is the default use case for most brands.

### New Features:
* CTA Button: the button padding, font-size, font-weight and width (fit content or full-width) are now customizable through dedicated properties.
* Images and header images now supported rounded corners. This is a progressive enhancement: Outlook on Windows will fall back to sharp corners.
* Header logo: Support for fixed height added
* Social Media Follow: the full list of social media elements is now customizable through the properties.

### Bug Fixes:

* CTA Button: the Outlook implementation treats longer button texts better
* Text: The text element properly passed the predefined styles (alignment, font-weight, font-size, text color) to the froala editor
* Dark Footer: the implementation behaves now properly on mobile devices too.
* Additional quality improvements

[1.1.0]: https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.1.0

## [1.0.2] - 14.11.2022

* Dependency updates
* text-element: support formatted default content (closes #16)
* prevent validation error due to CX bug with heigh/width

[1.0.2]: https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.0.2

## [1.0.1] - 04.11.2022

* Bug fixes on various email clients
* Consistent spacing in Outlook
* Prevent news snippet from breaking in content editor
* Make email preview visible in content editor
* More robust layout handling
* Dependency updates

[1.0.1]: https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.0.1

## [1.0.0] - 19.08.2022

### Changed

* Add dark mode support
* Bug fixes on various email clients
* Extend two column ratio 2:1 element
* Add german translation of labels

[1.0.0]: https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.0.0

## [1.0.0-rc.3] - 25.07.2022

### Changed

* Refactor all base and layout elements. Use `include` instead of `import` and `with` instead of `element.render(...)`.

[1.0.0-rc.3]: https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.0.0-rc.3


## [1.0.0-rc.2] - 30.06.2022

### Changed

* Add dropzone allowed elements.

[1.0.0-rc.2]: https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.0.0-rc.2


## [1.0.0-rc.1] - 28.06.2022

### Added

* Standard library for CX designs.

[1.0.0-rc.1]: https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.0.0-rc.1
