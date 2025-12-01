# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Next



## [1.2.4] - 01.12.2025

### Changes
* Add dark mode activation/deactivation using properties.js value
* Fix possible npm security issues
* Fix table header alignment
* Fix button padding for Outlook 365

[1.2.4]: https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.2.4


## [1.2.3] - 15.09.2025

### Changes
* Fix border for buttons with differently colored border and background
* Fix word-break and spacing between table columns on outlook
* Update editor styling for images
* Add dark mode property which is used to enable or disable the dark mode style in the browser
* Update dependencies

[1.2.3]: https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.2.3


## [1.2.2] - 06.12.2024

### Changes
* Export text element with .editor() function where htmlEditorConfig can be customized
* Add NPS Survey element
* Update button element spacings for outlook clients on windows
* Update 2-col footer and logo alignment

[1.2.2]: https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.2.2


## [1.2.1] - 18.07.2024

### Changes
* fix cta button border full-width (#383747) 
* Dependency updates

[1.2.1]: https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.2.1


## [1.2.0] - 28.02.2024

### New Features for templates with version CX 23.2:
* Introduced new format for CX styles, which allows DOM manipulations
* Replacement of similar elements by elements with CX styles
* Archiving of elements that are no longer required due to CX styles
* Add styling for CX placeholder/bracket links (e.g. [unsubscribe])

### Other Changes
* Improved accessibility: 
  * Keep alt attributes empty if only decorative images are included
  * Smiley rating element: transfer alt texts to properties file
* Social media follow element: replaced Twitter by X
* Add fallback styling for links inside formatted texts
* Dependency updates

[1.2.0]: https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.2.0


## [1.1.5] - 14.12.2023

### Changes
* Extension of overwriting properties: Social follow alignment
* Dependency updates

[1.1.5]: https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.1.5


## [1.1.4] - 22.09.2023

### Changes
* Extension of overwriting properties: Pre-Header text and colored footer width
* Dependency updates

[1.1.4]: https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.1.4


## [1.1.3] - 05.06.2023

### Changes
* Major dark mode issues fixed. To solve the remaining, [we are looking for your help](https://github.com/bsi-software/bsi-cx-design-master-template-email/issues/26)

[1.1.3]: https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.1.3


## [1.1.2] - 16.02.2023

### Changes
* Dependency updates
* This package is now available on NPM

[1.1.2]: https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.1.2


## [1.1.1] - 27.12.2022

### New Features:
* Header Image: add support for header images with different heights (allows to keep aspect ratio)
* Table: this element is now allowed in more areas
* Additional configurability for: smiley rating (spacer width), title elements (font-weight), social media follow (padding), news snippet (font weight, font family)

### Bug Fixes:
* Smiley Rating: fix full-width issue
* CTA: fix border and italic style in Outlook
* Event: reduction of the previously huge spacer width

[1.1.1]: https://github.com/bsi-software/bsi-cx-design-standard-library-email/releases/tag/1.1.1


## [1.1.0] - 13.12.2022

### Breaking Changes:
* CTA Button: We've added a new default implementation that is more robust among different clients. As a consequence, rounded corners in Outlook are no longer supported. If you intend to keep the previous implementation, set 'buttonLegacyVml: true' in the properties.js
* Dark Footer Layout: the dark background color now spans over the entire width, which is the default use case for most brands.

### New Features:
* CTA Button: the button padding, border strength, font-size, font-weight and width (fit content or full-width) are now customizable through dedicated properties.
* Images and header images now support rounded corners. This is a progressive enhancement: Outlook on Windows will fall back to sharp corners.
* Header logo: Support for fixed height added
* Social Media Follow: the full list of social media elements is now customizable through the properties.

### Bug Fixes:
* CTA Button: the Outlook implementation treats longer button texts better and the implementation is more robust.
* Text: The text element properly passed the predefined styles (alignment, font-weight, font-size, text color) to the froala editor
* Dark Footer: the implementation behaves now properly on mobile devices too.
* A few ghost lines on Outlook have been eliminated. For the resolution of the other once, we would welcome Pull Requests to address them.
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
