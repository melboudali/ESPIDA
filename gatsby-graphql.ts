export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  fbid?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
};

export type SitePageContext = {
  id?: Maybe<Scalars['String']>;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  packageJson?: Maybe<SitePluginPackageJson>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePluginPluginOptions = {
  displayName?: Maybe<Scalars['Boolean']>;
  minify?: Maybe<Scalars['Boolean']>;
  namespace?: Maybe<Scalars['String']>;
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
  pure?: Maybe<Scalars['Boolean']>;
  disableVendorPrefixes?: Maybe<Scalars['Boolean']>;
  defaults?: Maybe<SitePluginPluginOptionsDefaults>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  storeUrl?: Maybe<Scalars['String']>;
  shopifyConnections?: Maybe<Array<Maybe<Scalars['String']>>>;
  typePrefix?: Maybe<Scalars['String']>;
  salesChannel?: Maybe<Scalars['String']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  endpoint?: Maybe<Scalars['String']>;
  timeout?: Maybe<Scalars['Int']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsDefaults = {
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ShopifyProduct = Node & {
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  variants?: Maybe<Array<Maybe<ShopifyProductVariant>>>;
  metafields?: Maybe<Array<Maybe<ShopifyProductMetafield>>>;
  images?: Maybe<Array<Maybe<ShopifyProductImage>>>;
  collections?: Maybe<Array<Maybe<ShopifyCollection>>>;
  storefrontId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  descriptionHtml?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<ShopifyProductFeaturedImage>;
  featuredMedia?: Maybe<ShopifyProductFeaturedMedia>;
  giftCardTemplateSuffix?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  hasOnlyDefaultVariant?: Maybe<Scalars['Boolean']>;
  hasOutOfStockVariants?: Maybe<Scalars['Boolean']>;
  isGiftCard?: Maybe<Scalars['Boolean']>;
  legacyResourceId?: Maybe<Scalars['String']>;
  mediaCount?: Maybe<Scalars['Int']>;
  onlineStorePreviewUrl?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<ShopifyProductOptions>>>;
  priceRangeV2?: Maybe<ShopifyProductPriceRangeV2>;
  productType?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Date']>;
  requiresSellingPlan?: Maybe<Scalars['Boolean']>;
  sellingPlanGroupCount?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  templateSuffix?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  totalInventory?: Maybe<Scalars['Int']>;
  totalVariants?: Maybe<Scalars['Int']>;
  tracksInventory?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Date']>;
  vendor?: Maybe<Scalars['String']>;
  shopifyId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ShopifyProductCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ShopifyProductPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ShopifyProductUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ShopifyProductFeaturedMedia = {
  alt?: Maybe<Scalars['String']>;
  mediaContentType?: Maybe<Scalars['String']>;
  preview?: Maybe<ShopifyProductFeaturedMediaPreview>;
  status?: Maybe<Scalars['String']>;
};

export type ShopifyProductFeaturedMediaPreview = {
  image?: Maybe<ShopifyProductFeaturedMediaPreviewImage>;
  status?: Maybe<Scalars['String']>;
};

export type ShopifyProductOptions = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ShopifyProductPriceRangeV2 = {
  maxVariantPrice?: Maybe<ShopifyProductPriceRangeV2MaxVariantPrice>;
  minVariantPrice?: Maybe<ShopifyProductPriceRangeV2MinVariantPrice>;
};

export type ShopifyProductPriceRangeV2MaxVariantPrice = {
  amount?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type ShopifyProductPriceRangeV2MinVariantPrice = {
  amount?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type ShopifyProductImage = Node & {
  product: ShopifyProduct;
  altText?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  originalSrc: Scalars['String'];
  transformedSrc: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
  _xparentId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  shopifyId?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  gatsbyImageData: Scalars['JSON'];
};


export type ShopifyProductImageGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<GatsbyImagePlaceholder>;
  formats?: Maybe<Array<Maybe<GatsbyImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type ShopifyProductVariant = Node & {
  product: ShopifyProduct;
  metafields?: Maybe<Array<Maybe<ShopifyProductVariantMetafield>>>;
  availableForSale?: Maybe<Scalars['Boolean']>;
  barcode?: Maybe<Scalars['String']>;
  compareAtPrice?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  displayName?: Maybe<Scalars['String']>;
  image?: Maybe<ShopifyProductVariantImage>;
  inventoryItem?: Maybe<ShopifyProductVariantInventoryItem>;
  inventoryPolicy?: Maybe<Scalars['String']>;
  inventoryQuantity?: Maybe<Scalars['Int']>;
  legacyResourceId?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['String']>;
  selectedOptions?: Maybe<Array<Maybe<ShopifyProductVariantSelectedOptions>>>;
  sellingPlanGroupCount?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  storefrontId?: Maybe<Scalars['String']>;
  taxable?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  weight?: Maybe<Scalars['Float']>;
  weightUnit?: Maybe<Scalars['String']>;
  _xparentId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  shopifyId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ShopifyProductVariantCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ShopifyProductVariantUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ShopifyProductVariantInventoryItem = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  duplicateSkuCount?: Maybe<Scalars['Int']>;
  legacyResourceId?: Maybe<Scalars['String']>;
  locationsCount?: Maybe<Scalars['Int']>;
  requiresShipping?: Maybe<Scalars['Boolean']>;
  sku?: Maybe<Scalars['String']>;
  tracked?: Maybe<Scalars['Boolean']>;
  trackedEditable?: Maybe<ShopifyProductVariantInventoryItemTrackedEditable>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type ShopifyProductVariantInventoryItemCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ShopifyProductVariantInventoryItemUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ShopifyProductVariantInventoryItemTrackedEditable = {
  locked?: Maybe<Scalars['Boolean']>;
};

export type ShopifyProductVariantSelectedOptions = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ShopifyMetafieldInterface = {
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  key: Scalars['String'];
  namespace: Scalars['String'];
  ownerType: Scalars['String'];
  updatedAt: Scalars['Date'];
  value: Scalars['String'];
  type: Scalars['String'];
  /** @deprecated Shopify has deprecated this field */
  valueType: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ShopifyProductMetafield = Node & ShopifyMetafieldInterface & {
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  key: Scalars['String'];
  namespace: Scalars['String'];
  ownerType: Scalars['String'];
  updatedAt: Scalars['Date'];
  value: Scalars['String'];
  type: Scalars['String'];
  /** @deprecated Shopify has deprecated this field */
  valueType: Scalars['String'];
  product?: Maybe<ShopifyProduct>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ShopifyProductVariantMetafield = Node & ShopifyMetafieldInterface & {
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  key: Scalars['String'];
  namespace: Scalars['String'];
  ownerType: Scalars['String'];
  updatedAt: Scalars['Date'];
  value: Scalars['String'];
  type: Scalars['String'];
  /** @deprecated Shopify has deprecated this field */
  valueType: Scalars['String'];
  productVariant?: Maybe<ShopifyProductVariant>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ShopifyCollectionMetafield = Node & ShopifyMetafieldInterface & {
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  key: Scalars['String'];
  namespace: Scalars['String'];
  ownerType: Scalars['String'];
  updatedAt: Scalars['Date'];
  value: Scalars['String'];
  type: Scalars['String'];
  /** @deprecated Shopify has deprecated this field */
  valueType: Scalars['String'];
  collection?: Maybe<ShopifyCollection>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ShopifyCollection = Node & {
  products?: Maybe<Array<Maybe<ShopifyProduct>>>;
  metafields?: Maybe<Array<Maybe<ShopifyCollectionMetafield>>>;
  description?: Maybe<Scalars['String']>;
  descriptionHtml?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  legacyResourceId?: Maybe<Scalars['String']>;
  productsCount?: Maybe<Scalars['Int']>;
  sortOrder?: Maybe<Scalars['String']>;
  storefrontId?: Maybe<Scalars['String']>;
  templateSuffix?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  productIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  shopifyId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ShopifyCollectionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ShopifyOrder = Node & {
  lineItems?: Maybe<Array<Maybe<ShopifyLineItem>>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ShopifyLineItem = Node & {
  product?: Maybe<ShopifyProduct>;
  order: ShopifyOrder;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ShopifyInventoryLevel = Node & {
  location?: Maybe<ShopifyLocation>;
  available?: Maybe<Scalars['Int']>;
  _xparentId?: Maybe<Scalars['String']>;
  productVariantId?: Maybe<Scalars['String']>;
  shopifyId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ShopifyProductFeaturedImage = {
  altText?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  originalSrc: Scalars['String'];
  transformedSrc: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  gatsbyImageData: Scalars['JSON'];
};


export type ShopifyProductFeaturedImageGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<GatsbyImagePlaceholder>;
  formats?: Maybe<Array<Maybe<GatsbyImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type ShopifyProductFeaturedMediaPreviewImage = {
  altText?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  originalSrc: Scalars['String'];
  transformedSrc: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  gatsbyImageData: Scalars['JSON'];
};


export type ShopifyProductFeaturedMediaPreviewImageGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<GatsbyImagePlaceholder>;
  formats?: Maybe<Array<Maybe<GatsbyImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type ShopifyProductVariantImage = {
  altText?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  originalSrc: Scalars['String'];
  transformedSrc: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  gatsbyImageData: Scalars['JSON'];
};


export type ShopifyProductVariantImageGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<GatsbyImagePlaceholder>;
  formats?: Maybe<Array<Maybe<GatsbyImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type ShopifyCollectionImage = {
  altText?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  originalSrc: Scalars['String'];
  transformedSrc: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  gatsbyImageData: Scalars['JSON'];
};


export type ShopifyCollectionImageGatsbyImageDataArgs = {
  layout?: Maybe<GatsbyImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<GatsbyImagePlaceholder>;
  formats?: Maybe<Array<Maybe<GatsbyImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type ShopifyLocation = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  activatable?: Maybe<Scalars['Boolean']>;
  address?: Maybe<ShopifyLocationAddress>;
  addressVerified?: Maybe<Scalars['Boolean']>;
  deactivatable?: Maybe<Scalars['Boolean']>;
  deletable?: Maybe<Scalars['Boolean']>;
  fulfillsOnlineOrders?: Maybe<Scalars['Boolean']>;
  hasActiveInventory?: Maybe<Scalars['Boolean']>;
  hasUnfulfilledOrders?: Maybe<Scalars['Boolean']>;
  isActive?: Maybe<Scalars['Boolean']>;
  legacyResourceId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  shipsInventory?: Maybe<Scalars['Boolean']>;
  shopifyId?: Maybe<Scalars['String']>;
};

export type ShopifyLocationAddress = {
  address1?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  formatted?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  shopifyProduct?: Maybe<ShopifyProduct>;
  allShopifyProduct: ShopifyProductConnection;
  shopifyProductImage?: Maybe<ShopifyProductImage>;
  allShopifyProductImage: ShopifyProductImageConnection;
  shopifyProductVariant?: Maybe<ShopifyProductVariant>;
  allShopifyProductVariant: ShopifyProductVariantConnection;
  shopifyMetafieldInterface?: Maybe<ShopifyMetafieldInterface>;
  allShopifyMetafieldInterface: ShopifyMetafieldInterfaceConnection;
  shopifyProductMetafield?: Maybe<ShopifyProductMetafield>;
  allShopifyProductMetafield: ShopifyProductMetafieldConnection;
  shopifyProductVariantMetafield?: Maybe<ShopifyProductVariantMetafield>;
  allShopifyProductVariantMetafield: ShopifyProductVariantMetafieldConnection;
  shopifyCollectionMetafield?: Maybe<ShopifyCollectionMetafield>;
  allShopifyCollectionMetafield: ShopifyCollectionMetafieldConnection;
  shopifyCollection?: Maybe<ShopifyCollection>;
  allShopifyCollection: ShopifyCollectionConnection;
  shopifyOrder?: Maybe<ShopifyOrder>;
  allShopifyOrder: ShopifyOrderConnection;
  shopifyLineItem?: Maybe<ShopifyLineItem>;
  allShopifyLineItem: ShopifyLineItemConnection;
  shopifyInventoryLevel?: Maybe<ShopifyInventoryLevel>;
  allShopifyInventoryLevel: ShopifyInventoryLevelConnection;
  shopifyLocation?: Maybe<ShopifyLocation>;
  allShopifyLocation: ShopifyLocationConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyProductArgs = {
  tags?: Maybe<StringQueryOperatorInput>;
  variants?: Maybe<ShopifyProductVariantFilterListInput>;
  metafields?: Maybe<ShopifyProductMetafieldFilterListInput>;
  images?: Maybe<ShopifyProductImageFilterListInput>;
  collections?: Maybe<ShopifyCollectionFilterListInput>;
  storefrontId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  descriptionHtml?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<ShopifyProductFeaturedImageFilterInput>;
  featuredMedia?: Maybe<ShopifyProductFeaturedMediaFilterInput>;
  giftCardTemplateSuffix?: Maybe<StringQueryOperatorInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  hasOnlyDefaultVariant?: Maybe<BooleanQueryOperatorInput>;
  hasOutOfStockVariants?: Maybe<BooleanQueryOperatorInput>;
  isGiftCard?: Maybe<BooleanQueryOperatorInput>;
  legacyResourceId?: Maybe<StringQueryOperatorInput>;
  mediaCount?: Maybe<IntQueryOperatorInput>;
  onlineStorePreviewUrl?: Maybe<StringQueryOperatorInput>;
  options?: Maybe<ShopifyProductOptionsFilterListInput>;
  priceRangeV2?: Maybe<ShopifyProductPriceRangeV2FilterInput>;
  productType?: Maybe<StringQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  requiresSellingPlan?: Maybe<BooleanQueryOperatorInput>;
  sellingPlanGroupCount?: Maybe<IntQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  templateSuffix?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  totalInventory?: Maybe<IntQueryOperatorInput>;
  totalVariants?: Maybe<IntQueryOperatorInput>;
  tracksInventory?: Maybe<BooleanQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  vendor?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllShopifyProductArgs = {
  filter?: Maybe<ShopifyProductFilterInput>;
  sort?: Maybe<ShopifyProductSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyProductImageArgs = {
  product?: Maybe<ShopifyProductFilterInput>;
  altText?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  originalSrc?: Maybe<StringQueryOperatorInput>;
  transformedSrc?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  _xparentId?: Maybe<StringQueryOperatorInput>;
  productId?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllShopifyProductImageArgs = {
  filter?: Maybe<ShopifyProductImageFilterInput>;
  sort?: Maybe<ShopifyProductImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyProductVariantArgs = {
  product?: Maybe<ShopifyProductFilterInput>;
  metafields?: Maybe<ShopifyProductVariantMetafieldFilterListInput>;
  availableForSale?: Maybe<BooleanQueryOperatorInput>;
  barcode?: Maybe<StringQueryOperatorInput>;
  compareAtPrice?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  displayName?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ShopifyProductVariantImageFilterInput>;
  inventoryItem?: Maybe<ShopifyProductVariantInventoryItemFilterInput>;
  inventoryPolicy?: Maybe<StringQueryOperatorInput>;
  inventoryQuantity?: Maybe<IntQueryOperatorInput>;
  legacyResourceId?: Maybe<StringQueryOperatorInput>;
  position?: Maybe<IntQueryOperatorInput>;
  price?: Maybe<StringQueryOperatorInput>;
  selectedOptions?: Maybe<ShopifyProductVariantSelectedOptionsFilterListInput>;
  sellingPlanGroupCount?: Maybe<IntQueryOperatorInput>;
  sku?: Maybe<StringQueryOperatorInput>;
  storefrontId?: Maybe<StringQueryOperatorInput>;
  taxable?: Maybe<BooleanQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  weight?: Maybe<FloatQueryOperatorInput>;
  weightUnit?: Maybe<StringQueryOperatorInput>;
  _xparentId?: Maybe<StringQueryOperatorInput>;
  productId?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllShopifyProductVariantArgs = {
  filter?: Maybe<ShopifyProductVariantFilterInput>;
  sort?: Maybe<ShopifyProductVariantSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyMetafieldInterfaceArgs = {
  createdAt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  ownerType?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  valueType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllShopifyMetafieldInterfaceArgs = {
  filter?: Maybe<ShopifyMetafieldInterfaceFilterInput>;
  sort?: Maybe<ShopifyMetafieldInterfaceSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyProductMetafieldArgs = {
  createdAt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  ownerType?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  valueType?: Maybe<StringQueryOperatorInput>;
  product?: Maybe<ShopifyProductFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllShopifyProductMetafieldArgs = {
  filter?: Maybe<ShopifyProductMetafieldFilterInput>;
  sort?: Maybe<ShopifyProductMetafieldSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyProductVariantMetafieldArgs = {
  createdAt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  ownerType?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  valueType?: Maybe<StringQueryOperatorInput>;
  productVariant?: Maybe<ShopifyProductVariantFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllShopifyProductVariantMetafieldArgs = {
  filter?: Maybe<ShopifyProductVariantMetafieldFilterInput>;
  sort?: Maybe<ShopifyProductVariantMetafieldSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyCollectionMetafieldArgs = {
  createdAt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  ownerType?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  valueType?: Maybe<StringQueryOperatorInput>;
  collection?: Maybe<ShopifyCollectionFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllShopifyCollectionMetafieldArgs = {
  filter?: Maybe<ShopifyCollectionMetafieldFilterInput>;
  sort?: Maybe<ShopifyCollectionMetafieldSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyCollectionArgs = {
  products?: Maybe<ShopifyProductFilterListInput>;
  metafields?: Maybe<ShopifyCollectionMetafieldFilterListInput>;
  description?: Maybe<StringQueryOperatorInput>;
  descriptionHtml?: Maybe<StringQueryOperatorInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  legacyResourceId?: Maybe<StringQueryOperatorInput>;
  productsCount?: Maybe<IntQueryOperatorInput>;
  sortOrder?: Maybe<StringQueryOperatorInput>;
  storefrontId?: Maybe<StringQueryOperatorInput>;
  templateSuffix?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  productIds?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllShopifyCollectionArgs = {
  filter?: Maybe<ShopifyCollectionFilterInput>;
  sort?: Maybe<ShopifyCollectionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyOrderArgs = {
  lineItems?: Maybe<ShopifyLineItemFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllShopifyOrderArgs = {
  filter?: Maybe<ShopifyOrderFilterInput>;
  sort?: Maybe<ShopifyOrderSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyLineItemArgs = {
  product?: Maybe<ShopifyProductFilterInput>;
  order?: Maybe<ShopifyOrderFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllShopifyLineItemArgs = {
  filter?: Maybe<ShopifyLineItemFilterInput>;
  sort?: Maybe<ShopifyLineItemSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyInventoryLevelArgs = {
  location?: Maybe<ShopifyLocationFilterInput>;
  available?: Maybe<IntQueryOperatorInput>;
  _xparentId?: Maybe<StringQueryOperatorInput>;
  productVariantId?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllShopifyInventoryLevelArgs = {
  filter?: Maybe<ShopifyInventoryLevelFilterInput>;
  sort?: Maybe<ShopifyInventoryLevelSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryShopifyLocationArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  activatable?: Maybe<BooleanQueryOperatorInput>;
  address?: Maybe<ShopifyLocationAddressFilterInput>;
  addressVerified?: Maybe<BooleanQueryOperatorInput>;
  deactivatable?: Maybe<BooleanQueryOperatorInput>;
  deletable?: Maybe<BooleanQueryOperatorInput>;
  fulfillsOnlineOrders?: Maybe<BooleanQueryOperatorInput>;
  hasActiveInventory?: Maybe<BooleanQueryOperatorInput>;
  hasUnfulfilledOrders?: Maybe<BooleanQueryOperatorInput>;
  isActive?: Maybe<BooleanQueryOperatorInput>;
  legacyResourceId?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  shipsInventory?: Maybe<BooleanQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllShopifyLocationArgs = {
  filter?: Maybe<ShopifyLocationFilterInput>;
  sort?: Maybe<ShopifyLocationSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  fbid?: Maybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___image'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___author'
  | 'siteMetadata___fbid'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  displayName?: Maybe<BooleanQueryOperatorInput>;
  minify?: Maybe<BooleanQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
  pure?: Maybe<BooleanQueryOperatorInput>;
  disableVendorPrefixes?: Maybe<BooleanQueryOperatorInput>;
  defaults?: Maybe<SitePluginPluginOptionsDefaultsFilterInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  password?: Maybe<StringQueryOperatorInput>;
  storeUrl?: Maybe<StringQueryOperatorInput>;
  shopifyConnections?: Maybe<StringQueryOperatorInput>;
  typePrefix?: Maybe<StringQueryOperatorInput>;
  salesChannel?: Maybe<StringQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  endpoint?: Maybe<StringQueryOperatorInput>;
  timeout?: Maybe<IntQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsDefaultsFilterInput = {
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___id'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions___displayName'
  | 'pluginCreator___pluginOptions___minify'
  | 'pluginCreator___pluginOptions___namespace'
  | 'pluginCreator___pluginOptions___transpileTemplateLiterals'
  | 'pluginCreator___pluginOptions___pure'
  | 'pluginCreator___pluginOptions___disableVendorPrefixes'
  | 'pluginCreator___pluginOptions___defaults___placeholder'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___password'
  | 'pluginCreator___pluginOptions___storeUrl'
  | 'pluginCreator___pluginOptions___shopifyConnections'
  | 'pluginCreator___pluginOptions___typePrefix'
  | 'pluginCreator___pluginOptions___salesChannel'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___endpoint'
  | 'pluginCreator___pluginOptions___timeout'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreatorId';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions___displayName'
  | 'pluginOptions___minify'
  | 'pluginOptions___namespace'
  | 'pluginOptions___transpileTemplateLiterals'
  | 'pluginOptions___pure'
  | 'pluginOptions___disableVendorPrefixes'
  | 'pluginOptions___defaults___placeholder'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___password'
  | 'pluginOptions___storeUrl'
  | 'pluginOptions___shopifyConnections'
  | 'pluginOptions___typePrefix'
  | 'pluginOptions___salesChannel'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___endpoint'
  | 'pluginOptions___timeout'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyProductVariantFilterListInput = {
  elemMatch?: Maybe<ShopifyProductVariantFilterInput>;
};

export type ShopifyProductVariantFilterInput = {
  product?: Maybe<ShopifyProductFilterInput>;
  metafields?: Maybe<ShopifyProductVariantMetafieldFilterListInput>;
  availableForSale?: Maybe<BooleanQueryOperatorInput>;
  barcode?: Maybe<StringQueryOperatorInput>;
  compareAtPrice?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  displayName?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ShopifyProductVariantImageFilterInput>;
  inventoryItem?: Maybe<ShopifyProductVariantInventoryItemFilterInput>;
  inventoryPolicy?: Maybe<StringQueryOperatorInput>;
  inventoryQuantity?: Maybe<IntQueryOperatorInput>;
  legacyResourceId?: Maybe<StringQueryOperatorInput>;
  position?: Maybe<IntQueryOperatorInput>;
  price?: Maybe<StringQueryOperatorInput>;
  selectedOptions?: Maybe<ShopifyProductVariantSelectedOptionsFilterListInput>;
  sellingPlanGroupCount?: Maybe<IntQueryOperatorInput>;
  sku?: Maybe<StringQueryOperatorInput>;
  storefrontId?: Maybe<StringQueryOperatorInput>;
  taxable?: Maybe<BooleanQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  weight?: Maybe<FloatQueryOperatorInput>;
  weightUnit?: Maybe<StringQueryOperatorInput>;
  _xparentId?: Maybe<StringQueryOperatorInput>;
  productId?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ShopifyProductFilterInput = {
  tags?: Maybe<StringQueryOperatorInput>;
  variants?: Maybe<ShopifyProductVariantFilterListInput>;
  metafields?: Maybe<ShopifyProductMetafieldFilterListInput>;
  images?: Maybe<ShopifyProductImageFilterListInput>;
  collections?: Maybe<ShopifyCollectionFilterListInput>;
  storefrontId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  descriptionHtml?: Maybe<StringQueryOperatorInput>;
  featuredImage?: Maybe<ShopifyProductFeaturedImageFilterInput>;
  featuredMedia?: Maybe<ShopifyProductFeaturedMediaFilterInput>;
  giftCardTemplateSuffix?: Maybe<StringQueryOperatorInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  hasOnlyDefaultVariant?: Maybe<BooleanQueryOperatorInput>;
  hasOutOfStockVariants?: Maybe<BooleanQueryOperatorInput>;
  isGiftCard?: Maybe<BooleanQueryOperatorInput>;
  legacyResourceId?: Maybe<StringQueryOperatorInput>;
  mediaCount?: Maybe<IntQueryOperatorInput>;
  onlineStorePreviewUrl?: Maybe<StringQueryOperatorInput>;
  options?: Maybe<ShopifyProductOptionsFilterListInput>;
  priceRangeV2?: Maybe<ShopifyProductPriceRangeV2FilterInput>;
  productType?: Maybe<StringQueryOperatorInput>;
  publishedAt?: Maybe<DateQueryOperatorInput>;
  requiresSellingPlan?: Maybe<BooleanQueryOperatorInput>;
  sellingPlanGroupCount?: Maybe<IntQueryOperatorInput>;
  status?: Maybe<StringQueryOperatorInput>;
  templateSuffix?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  totalInventory?: Maybe<IntQueryOperatorInput>;
  totalVariants?: Maybe<IntQueryOperatorInput>;
  tracksInventory?: Maybe<BooleanQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  vendor?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ShopifyProductMetafieldFilterListInput = {
  elemMatch?: Maybe<ShopifyProductMetafieldFilterInput>;
};

export type ShopifyProductMetafieldFilterInput = {
  createdAt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  ownerType?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  valueType?: Maybe<StringQueryOperatorInput>;
  product?: Maybe<ShopifyProductFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ShopifyProductImageFilterListInput = {
  elemMatch?: Maybe<ShopifyProductImageFilterInput>;
};

export type ShopifyProductImageFilterInput = {
  product?: Maybe<ShopifyProductFilterInput>;
  altText?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  originalSrc?: Maybe<StringQueryOperatorInput>;
  transformedSrc?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  _xparentId?: Maybe<StringQueryOperatorInput>;
  productId?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ShopifyCollectionFilterListInput = {
  elemMatch?: Maybe<ShopifyCollectionFilterInput>;
};

export type ShopifyCollectionFilterInput = {
  products?: Maybe<ShopifyProductFilterListInput>;
  metafields?: Maybe<ShopifyCollectionMetafieldFilterListInput>;
  description?: Maybe<StringQueryOperatorInput>;
  descriptionHtml?: Maybe<StringQueryOperatorInput>;
  handle?: Maybe<StringQueryOperatorInput>;
  legacyResourceId?: Maybe<StringQueryOperatorInput>;
  productsCount?: Maybe<IntQueryOperatorInput>;
  sortOrder?: Maybe<StringQueryOperatorInput>;
  storefrontId?: Maybe<StringQueryOperatorInput>;
  templateSuffix?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  productIds?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ShopifyProductFilterListInput = {
  elemMatch?: Maybe<ShopifyProductFilterInput>;
};

export type ShopifyCollectionMetafieldFilterListInput = {
  elemMatch?: Maybe<ShopifyCollectionMetafieldFilterInput>;
};

export type ShopifyCollectionMetafieldFilterInput = {
  createdAt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  ownerType?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  valueType?: Maybe<StringQueryOperatorInput>;
  collection?: Maybe<ShopifyCollectionFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ShopifyProductFeaturedImageFilterInput = {
  altText?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  originalSrc?: Maybe<StringQueryOperatorInput>;
  transformedSrc?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type ShopifyProductFeaturedMediaFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>;
  mediaContentType?: Maybe<StringQueryOperatorInput>;
  preview?: Maybe<ShopifyProductFeaturedMediaPreviewFilterInput>;
  status?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductFeaturedMediaPreviewFilterInput = {
  image?: Maybe<ShopifyProductFeaturedMediaPreviewImageFilterInput>;
  status?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductFeaturedMediaPreviewImageFilterInput = {
  altText?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  originalSrc?: Maybe<StringQueryOperatorInput>;
  transformedSrc?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type ShopifyProductOptionsFilterListInput = {
  elemMatch?: Maybe<ShopifyProductOptionsFilterInput>;
};

export type ShopifyProductOptionsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  position?: Maybe<IntQueryOperatorInput>;
  values?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductPriceRangeV2FilterInput = {
  maxVariantPrice?: Maybe<ShopifyProductPriceRangeV2MaxVariantPriceFilterInput>;
  minVariantPrice?: Maybe<ShopifyProductPriceRangeV2MinVariantPriceFilterInput>;
};

export type ShopifyProductPriceRangeV2MaxVariantPriceFilterInput = {
  amount?: Maybe<StringQueryOperatorInput>;
  currencyCode?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductPriceRangeV2MinVariantPriceFilterInput = {
  amount?: Maybe<StringQueryOperatorInput>;
  currencyCode?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductVariantMetafieldFilterListInput = {
  elemMatch?: Maybe<ShopifyProductVariantMetafieldFilterInput>;
};

export type ShopifyProductVariantMetafieldFilterInput = {
  createdAt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  ownerType?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  valueType?: Maybe<StringQueryOperatorInput>;
  productVariant?: Maybe<ShopifyProductVariantFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ShopifyProductVariantImageFilterInput = {
  altText?: Maybe<StringQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  originalSrc?: Maybe<StringQueryOperatorInput>;
  transformedSrc?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
};

export type ShopifyProductVariantInventoryItemFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  duplicateSkuCount?: Maybe<IntQueryOperatorInput>;
  legacyResourceId?: Maybe<StringQueryOperatorInput>;
  locationsCount?: Maybe<IntQueryOperatorInput>;
  requiresShipping?: Maybe<BooleanQueryOperatorInput>;
  sku?: Maybe<StringQueryOperatorInput>;
  tracked?: Maybe<BooleanQueryOperatorInput>;
  trackedEditable?: Maybe<ShopifyProductVariantInventoryItemTrackedEditableFilterInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
};

export type ShopifyProductVariantInventoryItemTrackedEditableFilterInput = {
  locked?: Maybe<BooleanQueryOperatorInput>;
};

export type ShopifyProductVariantSelectedOptionsFilterListInput = {
  elemMatch?: Maybe<ShopifyProductVariantSelectedOptionsFilterInput>;
};

export type ShopifyProductVariantSelectedOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyProductConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductEdge>;
  nodes: Array<ShopifyProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductGroupConnection>;
};


export type ShopifyProductConnectionDistinctArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductConnectionMaxArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductConnectionMinArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductConnectionSumArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyProductFieldsEnum;
};

export type ShopifyProductEdge = {
  next?: Maybe<ShopifyProduct>;
  node: ShopifyProduct;
  previous?: Maybe<ShopifyProduct>;
};

export type ShopifyProductFieldsEnum =
  | 'tags'
  | 'variants'
  | 'variants___product___tags'
  | 'variants___product___variants'
  | 'variants___product___variants___metafields'
  | 'variants___product___variants___availableForSale'
  | 'variants___product___variants___barcode'
  | 'variants___product___variants___compareAtPrice'
  | 'variants___product___variants___createdAt'
  | 'variants___product___variants___displayName'
  | 'variants___product___variants___inventoryPolicy'
  | 'variants___product___variants___inventoryQuantity'
  | 'variants___product___variants___legacyResourceId'
  | 'variants___product___variants___position'
  | 'variants___product___variants___price'
  | 'variants___product___variants___selectedOptions'
  | 'variants___product___variants___sellingPlanGroupCount'
  | 'variants___product___variants___sku'
  | 'variants___product___variants___storefrontId'
  | 'variants___product___variants___taxable'
  | 'variants___product___variants___title'
  | 'variants___product___variants___updatedAt'
  | 'variants___product___variants___weight'
  | 'variants___product___variants___weightUnit'
  | 'variants___product___variants____xparentId'
  | 'variants___product___variants___productId'
  | 'variants___product___variants___shopifyId'
  | 'variants___product___variants___id'
  | 'variants___product___variants___children'
  | 'variants___product___metafields'
  | 'variants___product___metafields___createdAt'
  | 'variants___product___metafields___description'
  | 'variants___product___metafields___id'
  | 'variants___product___metafields___key'
  | 'variants___product___metafields___namespace'
  | 'variants___product___metafields___ownerType'
  | 'variants___product___metafields___updatedAt'
  | 'variants___product___metafields___value'
  | 'variants___product___metafields___type'
  | 'variants___product___metafields___valueType'
  | 'variants___product___metafields___children'
  | 'variants___product___images'
  | 'variants___product___images___altText'
  | 'variants___product___images___height'
  | 'variants___product___images___id'
  | 'variants___product___images___originalSrc'
  | 'variants___product___images___transformedSrc'
  | 'variants___product___images___width'
  | 'variants___product___images___src'
  | 'variants___product___images____xparentId'
  | 'variants___product___images___productId'
  | 'variants___product___images___shopifyId'
  | 'variants___product___images___children'
  | 'variants___product___collections'
  | 'variants___product___collections___products'
  | 'variants___product___collections___metafields'
  | 'variants___product___collections___description'
  | 'variants___product___collections___descriptionHtml'
  | 'variants___product___collections___handle'
  | 'variants___product___collections___legacyResourceId'
  | 'variants___product___collections___productsCount'
  | 'variants___product___collections___sortOrder'
  | 'variants___product___collections___storefrontId'
  | 'variants___product___collections___templateSuffix'
  | 'variants___product___collections___title'
  | 'variants___product___collections___updatedAt'
  | 'variants___product___collections___productIds'
  | 'variants___product___collections___shopifyId'
  | 'variants___product___collections___id'
  | 'variants___product___collections___children'
  | 'variants___product___storefrontId'
  | 'variants___product___createdAt'
  | 'variants___product___description'
  | 'variants___product___descriptionHtml'
  | 'variants___product___featuredImage___altText'
  | 'variants___product___featuredImage___height'
  | 'variants___product___featuredImage___id'
  | 'variants___product___featuredImage___originalSrc'
  | 'variants___product___featuredImage___transformedSrc'
  | 'variants___product___featuredImage___width'
  | 'variants___product___featuredMedia___alt'
  | 'variants___product___featuredMedia___mediaContentType'
  | 'variants___product___featuredMedia___status'
  | 'variants___product___giftCardTemplateSuffix'
  | 'variants___product___handle'
  | 'variants___product___hasOnlyDefaultVariant'
  | 'variants___product___hasOutOfStockVariants'
  | 'variants___product___isGiftCard'
  | 'variants___product___legacyResourceId'
  | 'variants___product___mediaCount'
  | 'variants___product___onlineStorePreviewUrl'
  | 'variants___product___options'
  | 'variants___product___options___id'
  | 'variants___product___options___name'
  | 'variants___product___options___position'
  | 'variants___product___options___values'
  | 'variants___product___productType'
  | 'variants___product___publishedAt'
  | 'variants___product___requiresSellingPlan'
  | 'variants___product___sellingPlanGroupCount'
  | 'variants___product___status'
  | 'variants___product___templateSuffix'
  | 'variants___product___title'
  | 'variants___product___totalInventory'
  | 'variants___product___totalVariants'
  | 'variants___product___tracksInventory'
  | 'variants___product___updatedAt'
  | 'variants___product___vendor'
  | 'variants___product___shopifyId'
  | 'variants___product___id'
  | 'variants___product___parent___id'
  | 'variants___product___parent___children'
  | 'variants___product___children'
  | 'variants___product___children___id'
  | 'variants___product___children___children'
  | 'variants___product___internal___content'
  | 'variants___product___internal___contentDigest'
  | 'variants___product___internal___description'
  | 'variants___product___internal___fieldOwners'
  | 'variants___product___internal___ignoreType'
  | 'variants___product___internal___mediaType'
  | 'variants___product___internal___owner'
  | 'variants___product___internal___type'
  | 'variants___metafields'
  | 'variants___metafields___createdAt'
  | 'variants___metafields___description'
  | 'variants___metafields___id'
  | 'variants___metafields___key'
  | 'variants___metafields___namespace'
  | 'variants___metafields___ownerType'
  | 'variants___metafields___updatedAt'
  | 'variants___metafields___value'
  | 'variants___metafields___type'
  | 'variants___metafields___valueType'
  | 'variants___metafields___productVariant___metafields'
  | 'variants___metafields___productVariant___availableForSale'
  | 'variants___metafields___productVariant___barcode'
  | 'variants___metafields___productVariant___compareAtPrice'
  | 'variants___metafields___productVariant___createdAt'
  | 'variants___metafields___productVariant___displayName'
  | 'variants___metafields___productVariant___inventoryPolicy'
  | 'variants___metafields___productVariant___inventoryQuantity'
  | 'variants___metafields___productVariant___legacyResourceId'
  | 'variants___metafields___productVariant___position'
  | 'variants___metafields___productVariant___price'
  | 'variants___metafields___productVariant___selectedOptions'
  | 'variants___metafields___productVariant___sellingPlanGroupCount'
  | 'variants___metafields___productVariant___sku'
  | 'variants___metafields___productVariant___storefrontId'
  | 'variants___metafields___productVariant___taxable'
  | 'variants___metafields___productVariant___title'
  | 'variants___metafields___productVariant___updatedAt'
  | 'variants___metafields___productVariant___weight'
  | 'variants___metafields___productVariant___weightUnit'
  | 'variants___metafields___productVariant____xparentId'
  | 'variants___metafields___productVariant___productId'
  | 'variants___metafields___productVariant___shopifyId'
  | 'variants___metafields___productVariant___id'
  | 'variants___metafields___productVariant___children'
  | 'variants___metafields___parent___id'
  | 'variants___metafields___parent___children'
  | 'variants___metafields___children'
  | 'variants___metafields___children___id'
  | 'variants___metafields___children___children'
  | 'variants___metafields___internal___content'
  | 'variants___metafields___internal___contentDigest'
  | 'variants___metafields___internal___description'
  | 'variants___metafields___internal___fieldOwners'
  | 'variants___metafields___internal___ignoreType'
  | 'variants___metafields___internal___mediaType'
  | 'variants___metafields___internal___owner'
  | 'variants___metafields___internal___type'
  | 'variants___availableForSale'
  | 'variants___barcode'
  | 'variants___compareAtPrice'
  | 'variants___createdAt'
  | 'variants___displayName'
  | 'variants___image___altText'
  | 'variants___image___height'
  | 'variants___image___id'
  | 'variants___image___originalSrc'
  | 'variants___image___transformedSrc'
  | 'variants___image___width'
  | 'variants___inventoryItem___id'
  | 'variants___inventoryItem___createdAt'
  | 'variants___inventoryItem___duplicateSkuCount'
  | 'variants___inventoryItem___legacyResourceId'
  | 'variants___inventoryItem___locationsCount'
  | 'variants___inventoryItem___requiresShipping'
  | 'variants___inventoryItem___sku'
  | 'variants___inventoryItem___tracked'
  | 'variants___inventoryItem___trackedEditable___locked'
  | 'variants___inventoryItem___updatedAt'
  | 'variants___inventoryPolicy'
  | 'variants___inventoryQuantity'
  | 'variants___legacyResourceId'
  | 'variants___position'
  | 'variants___price'
  | 'variants___selectedOptions'
  | 'variants___selectedOptions___name'
  | 'variants___selectedOptions___value'
  | 'variants___sellingPlanGroupCount'
  | 'variants___sku'
  | 'variants___storefrontId'
  | 'variants___taxable'
  | 'variants___title'
  | 'variants___updatedAt'
  | 'variants___weight'
  | 'variants___weightUnit'
  | 'variants____xparentId'
  | 'variants___productId'
  | 'variants___shopifyId'
  | 'variants___id'
  | 'variants___parent___id'
  | 'variants___parent___parent___id'
  | 'variants___parent___parent___children'
  | 'variants___parent___children'
  | 'variants___parent___children___id'
  | 'variants___parent___children___children'
  | 'variants___parent___internal___content'
  | 'variants___parent___internal___contentDigest'
  | 'variants___parent___internal___description'
  | 'variants___parent___internal___fieldOwners'
  | 'variants___parent___internal___ignoreType'
  | 'variants___parent___internal___mediaType'
  | 'variants___parent___internal___owner'
  | 'variants___parent___internal___type'
  | 'variants___children'
  | 'variants___children___id'
  | 'variants___children___parent___id'
  | 'variants___children___parent___children'
  | 'variants___children___children'
  | 'variants___children___children___id'
  | 'variants___children___children___children'
  | 'variants___children___internal___content'
  | 'variants___children___internal___contentDigest'
  | 'variants___children___internal___description'
  | 'variants___children___internal___fieldOwners'
  | 'variants___children___internal___ignoreType'
  | 'variants___children___internal___mediaType'
  | 'variants___children___internal___owner'
  | 'variants___children___internal___type'
  | 'variants___internal___content'
  | 'variants___internal___contentDigest'
  | 'variants___internal___description'
  | 'variants___internal___fieldOwners'
  | 'variants___internal___ignoreType'
  | 'variants___internal___mediaType'
  | 'variants___internal___owner'
  | 'variants___internal___type'
  | 'metafields'
  | 'metafields___createdAt'
  | 'metafields___description'
  | 'metafields___id'
  | 'metafields___key'
  | 'metafields___namespace'
  | 'metafields___ownerType'
  | 'metafields___updatedAt'
  | 'metafields___value'
  | 'metafields___type'
  | 'metafields___valueType'
  | 'metafields___product___tags'
  | 'metafields___product___variants'
  | 'metafields___product___variants___metafields'
  | 'metafields___product___variants___availableForSale'
  | 'metafields___product___variants___barcode'
  | 'metafields___product___variants___compareAtPrice'
  | 'metafields___product___variants___createdAt'
  | 'metafields___product___variants___displayName'
  | 'metafields___product___variants___inventoryPolicy'
  | 'metafields___product___variants___inventoryQuantity'
  | 'metafields___product___variants___legacyResourceId'
  | 'metafields___product___variants___position'
  | 'metafields___product___variants___price'
  | 'metafields___product___variants___selectedOptions'
  | 'metafields___product___variants___sellingPlanGroupCount'
  | 'metafields___product___variants___sku'
  | 'metafields___product___variants___storefrontId'
  | 'metafields___product___variants___taxable'
  | 'metafields___product___variants___title'
  | 'metafields___product___variants___updatedAt'
  | 'metafields___product___variants___weight'
  | 'metafields___product___variants___weightUnit'
  | 'metafields___product___variants____xparentId'
  | 'metafields___product___variants___productId'
  | 'metafields___product___variants___shopifyId'
  | 'metafields___product___variants___id'
  | 'metafields___product___variants___children'
  | 'metafields___product___metafields'
  | 'metafields___product___metafields___createdAt'
  | 'metafields___product___metafields___description'
  | 'metafields___product___metafields___id'
  | 'metafields___product___metafields___key'
  | 'metafields___product___metafields___namespace'
  | 'metafields___product___metafields___ownerType'
  | 'metafields___product___metafields___updatedAt'
  | 'metafields___product___metafields___value'
  | 'metafields___product___metafields___type'
  | 'metafields___product___metafields___valueType'
  | 'metafields___product___metafields___children'
  | 'metafields___product___images'
  | 'metafields___product___images___altText'
  | 'metafields___product___images___height'
  | 'metafields___product___images___id'
  | 'metafields___product___images___originalSrc'
  | 'metafields___product___images___transformedSrc'
  | 'metafields___product___images___width'
  | 'metafields___product___images___src'
  | 'metafields___product___images____xparentId'
  | 'metafields___product___images___productId'
  | 'metafields___product___images___shopifyId'
  | 'metafields___product___images___children'
  | 'metafields___product___collections'
  | 'metafields___product___collections___products'
  | 'metafields___product___collections___metafields'
  | 'metafields___product___collections___description'
  | 'metafields___product___collections___descriptionHtml'
  | 'metafields___product___collections___handle'
  | 'metafields___product___collections___legacyResourceId'
  | 'metafields___product___collections___productsCount'
  | 'metafields___product___collections___sortOrder'
  | 'metafields___product___collections___storefrontId'
  | 'metafields___product___collections___templateSuffix'
  | 'metafields___product___collections___title'
  | 'metafields___product___collections___updatedAt'
  | 'metafields___product___collections___productIds'
  | 'metafields___product___collections___shopifyId'
  | 'metafields___product___collections___id'
  | 'metafields___product___collections___children'
  | 'metafields___product___storefrontId'
  | 'metafields___product___createdAt'
  | 'metafields___product___description'
  | 'metafields___product___descriptionHtml'
  | 'metafields___product___featuredImage___altText'
  | 'metafields___product___featuredImage___height'
  | 'metafields___product___featuredImage___id'
  | 'metafields___product___featuredImage___originalSrc'
  | 'metafields___product___featuredImage___transformedSrc'
  | 'metafields___product___featuredImage___width'
  | 'metafields___product___featuredMedia___alt'
  | 'metafields___product___featuredMedia___mediaContentType'
  | 'metafields___product___featuredMedia___status'
  | 'metafields___product___giftCardTemplateSuffix'
  | 'metafields___product___handle'
  | 'metafields___product___hasOnlyDefaultVariant'
  | 'metafields___product___hasOutOfStockVariants'
  | 'metafields___product___isGiftCard'
  | 'metafields___product___legacyResourceId'
  | 'metafields___product___mediaCount'
  | 'metafields___product___onlineStorePreviewUrl'
  | 'metafields___product___options'
  | 'metafields___product___options___id'
  | 'metafields___product___options___name'
  | 'metafields___product___options___position'
  | 'metafields___product___options___values'
  | 'metafields___product___productType'
  | 'metafields___product___publishedAt'
  | 'metafields___product___requiresSellingPlan'
  | 'metafields___product___sellingPlanGroupCount'
  | 'metafields___product___status'
  | 'metafields___product___templateSuffix'
  | 'metafields___product___title'
  | 'metafields___product___totalInventory'
  | 'metafields___product___totalVariants'
  | 'metafields___product___tracksInventory'
  | 'metafields___product___updatedAt'
  | 'metafields___product___vendor'
  | 'metafields___product___shopifyId'
  | 'metafields___product___id'
  | 'metafields___product___parent___id'
  | 'metafields___product___parent___children'
  | 'metafields___product___children'
  | 'metafields___product___children___id'
  | 'metafields___product___children___children'
  | 'metafields___product___internal___content'
  | 'metafields___product___internal___contentDigest'
  | 'metafields___product___internal___description'
  | 'metafields___product___internal___fieldOwners'
  | 'metafields___product___internal___ignoreType'
  | 'metafields___product___internal___mediaType'
  | 'metafields___product___internal___owner'
  | 'metafields___product___internal___type'
  | 'metafields___parent___id'
  | 'metafields___parent___parent___id'
  | 'metafields___parent___parent___children'
  | 'metafields___parent___children'
  | 'metafields___parent___children___id'
  | 'metafields___parent___children___children'
  | 'metafields___parent___internal___content'
  | 'metafields___parent___internal___contentDigest'
  | 'metafields___parent___internal___description'
  | 'metafields___parent___internal___fieldOwners'
  | 'metafields___parent___internal___ignoreType'
  | 'metafields___parent___internal___mediaType'
  | 'metafields___parent___internal___owner'
  | 'metafields___parent___internal___type'
  | 'metafields___children'
  | 'metafields___children___id'
  | 'metafields___children___parent___id'
  | 'metafields___children___parent___children'
  | 'metafields___children___children'
  | 'metafields___children___children___id'
  | 'metafields___children___children___children'
  | 'metafields___children___internal___content'
  | 'metafields___children___internal___contentDigest'
  | 'metafields___children___internal___description'
  | 'metafields___children___internal___fieldOwners'
  | 'metafields___children___internal___ignoreType'
  | 'metafields___children___internal___mediaType'
  | 'metafields___children___internal___owner'
  | 'metafields___children___internal___type'
  | 'metafields___internal___content'
  | 'metafields___internal___contentDigest'
  | 'metafields___internal___description'
  | 'metafields___internal___fieldOwners'
  | 'metafields___internal___ignoreType'
  | 'metafields___internal___mediaType'
  | 'metafields___internal___owner'
  | 'metafields___internal___type'
  | 'images'
  | 'images___product___tags'
  | 'images___product___variants'
  | 'images___product___variants___metafields'
  | 'images___product___variants___availableForSale'
  | 'images___product___variants___barcode'
  | 'images___product___variants___compareAtPrice'
  | 'images___product___variants___createdAt'
  | 'images___product___variants___displayName'
  | 'images___product___variants___inventoryPolicy'
  | 'images___product___variants___inventoryQuantity'
  | 'images___product___variants___legacyResourceId'
  | 'images___product___variants___position'
  | 'images___product___variants___price'
  | 'images___product___variants___selectedOptions'
  | 'images___product___variants___sellingPlanGroupCount'
  | 'images___product___variants___sku'
  | 'images___product___variants___storefrontId'
  | 'images___product___variants___taxable'
  | 'images___product___variants___title'
  | 'images___product___variants___updatedAt'
  | 'images___product___variants___weight'
  | 'images___product___variants___weightUnit'
  | 'images___product___variants____xparentId'
  | 'images___product___variants___productId'
  | 'images___product___variants___shopifyId'
  | 'images___product___variants___id'
  | 'images___product___variants___children'
  | 'images___product___metafields'
  | 'images___product___metafields___createdAt'
  | 'images___product___metafields___description'
  | 'images___product___metafields___id'
  | 'images___product___metafields___key'
  | 'images___product___metafields___namespace'
  | 'images___product___metafields___ownerType'
  | 'images___product___metafields___updatedAt'
  | 'images___product___metafields___value'
  | 'images___product___metafields___type'
  | 'images___product___metafields___valueType'
  | 'images___product___metafields___children'
  | 'images___product___images'
  | 'images___product___images___altText'
  | 'images___product___images___height'
  | 'images___product___images___id'
  | 'images___product___images___originalSrc'
  | 'images___product___images___transformedSrc'
  | 'images___product___images___width'
  | 'images___product___images___src'
  | 'images___product___images____xparentId'
  | 'images___product___images___productId'
  | 'images___product___images___shopifyId'
  | 'images___product___images___children'
  | 'images___product___collections'
  | 'images___product___collections___products'
  | 'images___product___collections___metafields'
  | 'images___product___collections___description'
  | 'images___product___collections___descriptionHtml'
  | 'images___product___collections___handle'
  | 'images___product___collections___legacyResourceId'
  | 'images___product___collections___productsCount'
  | 'images___product___collections___sortOrder'
  | 'images___product___collections___storefrontId'
  | 'images___product___collections___templateSuffix'
  | 'images___product___collections___title'
  | 'images___product___collections___updatedAt'
  | 'images___product___collections___productIds'
  | 'images___product___collections___shopifyId'
  | 'images___product___collections___id'
  | 'images___product___collections___children'
  | 'images___product___storefrontId'
  | 'images___product___createdAt'
  | 'images___product___description'
  | 'images___product___descriptionHtml'
  | 'images___product___featuredImage___altText'
  | 'images___product___featuredImage___height'
  | 'images___product___featuredImage___id'
  | 'images___product___featuredImage___originalSrc'
  | 'images___product___featuredImage___transformedSrc'
  | 'images___product___featuredImage___width'
  | 'images___product___featuredMedia___alt'
  | 'images___product___featuredMedia___mediaContentType'
  | 'images___product___featuredMedia___status'
  | 'images___product___giftCardTemplateSuffix'
  | 'images___product___handle'
  | 'images___product___hasOnlyDefaultVariant'
  | 'images___product___hasOutOfStockVariants'
  | 'images___product___isGiftCard'
  | 'images___product___legacyResourceId'
  | 'images___product___mediaCount'
  | 'images___product___onlineStorePreviewUrl'
  | 'images___product___options'
  | 'images___product___options___id'
  | 'images___product___options___name'
  | 'images___product___options___position'
  | 'images___product___options___values'
  | 'images___product___productType'
  | 'images___product___publishedAt'
  | 'images___product___requiresSellingPlan'
  | 'images___product___sellingPlanGroupCount'
  | 'images___product___status'
  | 'images___product___templateSuffix'
  | 'images___product___title'
  | 'images___product___totalInventory'
  | 'images___product___totalVariants'
  | 'images___product___tracksInventory'
  | 'images___product___updatedAt'
  | 'images___product___vendor'
  | 'images___product___shopifyId'
  | 'images___product___id'
  | 'images___product___parent___id'
  | 'images___product___parent___children'
  | 'images___product___children'
  | 'images___product___children___id'
  | 'images___product___children___children'
  | 'images___product___internal___content'
  | 'images___product___internal___contentDigest'
  | 'images___product___internal___description'
  | 'images___product___internal___fieldOwners'
  | 'images___product___internal___ignoreType'
  | 'images___product___internal___mediaType'
  | 'images___product___internal___owner'
  | 'images___product___internal___type'
  | 'images___altText'
  | 'images___height'
  | 'images___id'
  | 'images___originalSrc'
  | 'images___transformedSrc'
  | 'images___width'
  | 'images___src'
  | 'images____xparentId'
  | 'images___productId'
  | 'images___shopifyId'
  | 'images___parent___id'
  | 'images___parent___parent___id'
  | 'images___parent___parent___children'
  | 'images___parent___children'
  | 'images___parent___children___id'
  | 'images___parent___children___children'
  | 'images___parent___internal___content'
  | 'images___parent___internal___contentDigest'
  | 'images___parent___internal___description'
  | 'images___parent___internal___fieldOwners'
  | 'images___parent___internal___ignoreType'
  | 'images___parent___internal___mediaType'
  | 'images___parent___internal___owner'
  | 'images___parent___internal___type'
  | 'images___children'
  | 'images___children___id'
  | 'images___children___parent___id'
  | 'images___children___parent___children'
  | 'images___children___children'
  | 'images___children___children___id'
  | 'images___children___children___children'
  | 'images___children___internal___content'
  | 'images___children___internal___contentDigest'
  | 'images___children___internal___description'
  | 'images___children___internal___fieldOwners'
  | 'images___children___internal___ignoreType'
  | 'images___children___internal___mediaType'
  | 'images___children___internal___owner'
  | 'images___children___internal___type'
  | 'images___internal___content'
  | 'images___internal___contentDigest'
  | 'images___internal___description'
  | 'images___internal___fieldOwners'
  | 'images___internal___ignoreType'
  | 'images___internal___mediaType'
  | 'images___internal___owner'
  | 'images___internal___type'
  | 'collections'
  | 'collections___products'
  | 'collections___products___tags'
  | 'collections___products___variants'
  | 'collections___products___variants___metafields'
  | 'collections___products___variants___availableForSale'
  | 'collections___products___variants___barcode'
  | 'collections___products___variants___compareAtPrice'
  | 'collections___products___variants___createdAt'
  | 'collections___products___variants___displayName'
  | 'collections___products___variants___inventoryPolicy'
  | 'collections___products___variants___inventoryQuantity'
  | 'collections___products___variants___legacyResourceId'
  | 'collections___products___variants___position'
  | 'collections___products___variants___price'
  | 'collections___products___variants___selectedOptions'
  | 'collections___products___variants___sellingPlanGroupCount'
  | 'collections___products___variants___sku'
  | 'collections___products___variants___storefrontId'
  | 'collections___products___variants___taxable'
  | 'collections___products___variants___title'
  | 'collections___products___variants___updatedAt'
  | 'collections___products___variants___weight'
  | 'collections___products___variants___weightUnit'
  | 'collections___products___variants____xparentId'
  | 'collections___products___variants___productId'
  | 'collections___products___variants___shopifyId'
  | 'collections___products___variants___id'
  | 'collections___products___variants___children'
  | 'collections___products___metafields'
  | 'collections___products___metafields___createdAt'
  | 'collections___products___metafields___description'
  | 'collections___products___metafields___id'
  | 'collections___products___metafields___key'
  | 'collections___products___metafields___namespace'
  | 'collections___products___metafields___ownerType'
  | 'collections___products___metafields___updatedAt'
  | 'collections___products___metafields___value'
  | 'collections___products___metafields___type'
  | 'collections___products___metafields___valueType'
  | 'collections___products___metafields___children'
  | 'collections___products___images'
  | 'collections___products___images___altText'
  | 'collections___products___images___height'
  | 'collections___products___images___id'
  | 'collections___products___images___originalSrc'
  | 'collections___products___images___transformedSrc'
  | 'collections___products___images___width'
  | 'collections___products___images___src'
  | 'collections___products___images____xparentId'
  | 'collections___products___images___productId'
  | 'collections___products___images___shopifyId'
  | 'collections___products___images___children'
  | 'collections___products___collections'
  | 'collections___products___collections___products'
  | 'collections___products___collections___metafields'
  | 'collections___products___collections___description'
  | 'collections___products___collections___descriptionHtml'
  | 'collections___products___collections___handle'
  | 'collections___products___collections___legacyResourceId'
  | 'collections___products___collections___productsCount'
  | 'collections___products___collections___sortOrder'
  | 'collections___products___collections___storefrontId'
  | 'collections___products___collections___templateSuffix'
  | 'collections___products___collections___title'
  | 'collections___products___collections___updatedAt'
  | 'collections___products___collections___productIds'
  | 'collections___products___collections___shopifyId'
  | 'collections___products___collections___id'
  | 'collections___products___collections___children'
  | 'collections___products___storefrontId'
  | 'collections___products___createdAt'
  | 'collections___products___description'
  | 'collections___products___descriptionHtml'
  | 'collections___products___featuredImage___altText'
  | 'collections___products___featuredImage___height'
  | 'collections___products___featuredImage___id'
  | 'collections___products___featuredImage___originalSrc'
  | 'collections___products___featuredImage___transformedSrc'
  | 'collections___products___featuredImage___width'
  | 'collections___products___featuredMedia___alt'
  | 'collections___products___featuredMedia___mediaContentType'
  | 'collections___products___featuredMedia___status'
  | 'collections___products___giftCardTemplateSuffix'
  | 'collections___products___handle'
  | 'collections___products___hasOnlyDefaultVariant'
  | 'collections___products___hasOutOfStockVariants'
  | 'collections___products___isGiftCard'
  | 'collections___products___legacyResourceId'
  | 'collections___products___mediaCount'
  | 'collections___products___onlineStorePreviewUrl'
  | 'collections___products___options'
  | 'collections___products___options___id'
  | 'collections___products___options___name'
  | 'collections___products___options___position'
  | 'collections___products___options___values'
  | 'collections___products___productType'
  | 'collections___products___publishedAt'
  | 'collections___products___requiresSellingPlan'
  | 'collections___products___sellingPlanGroupCount'
  | 'collections___products___status'
  | 'collections___products___templateSuffix'
  | 'collections___products___title'
  | 'collections___products___totalInventory'
  | 'collections___products___totalVariants'
  | 'collections___products___tracksInventory'
  | 'collections___products___updatedAt'
  | 'collections___products___vendor'
  | 'collections___products___shopifyId'
  | 'collections___products___id'
  | 'collections___products___parent___id'
  | 'collections___products___parent___children'
  | 'collections___products___children'
  | 'collections___products___children___id'
  | 'collections___products___children___children'
  | 'collections___products___internal___content'
  | 'collections___products___internal___contentDigest'
  | 'collections___products___internal___description'
  | 'collections___products___internal___fieldOwners'
  | 'collections___products___internal___ignoreType'
  | 'collections___products___internal___mediaType'
  | 'collections___products___internal___owner'
  | 'collections___products___internal___type'
  | 'collections___metafields'
  | 'collections___metafields___createdAt'
  | 'collections___metafields___description'
  | 'collections___metafields___id'
  | 'collections___metafields___key'
  | 'collections___metafields___namespace'
  | 'collections___metafields___ownerType'
  | 'collections___metafields___updatedAt'
  | 'collections___metafields___value'
  | 'collections___metafields___type'
  | 'collections___metafields___valueType'
  | 'collections___metafields___collection___products'
  | 'collections___metafields___collection___metafields'
  | 'collections___metafields___collection___description'
  | 'collections___metafields___collection___descriptionHtml'
  | 'collections___metafields___collection___handle'
  | 'collections___metafields___collection___legacyResourceId'
  | 'collections___metafields___collection___productsCount'
  | 'collections___metafields___collection___sortOrder'
  | 'collections___metafields___collection___storefrontId'
  | 'collections___metafields___collection___templateSuffix'
  | 'collections___metafields___collection___title'
  | 'collections___metafields___collection___updatedAt'
  | 'collections___metafields___collection___productIds'
  | 'collections___metafields___collection___shopifyId'
  | 'collections___metafields___collection___id'
  | 'collections___metafields___collection___children'
  | 'collections___metafields___parent___id'
  | 'collections___metafields___parent___children'
  | 'collections___metafields___children'
  | 'collections___metafields___children___id'
  | 'collections___metafields___children___children'
  | 'collections___metafields___internal___content'
  | 'collections___metafields___internal___contentDigest'
  | 'collections___metafields___internal___description'
  | 'collections___metafields___internal___fieldOwners'
  | 'collections___metafields___internal___ignoreType'
  | 'collections___metafields___internal___mediaType'
  | 'collections___metafields___internal___owner'
  | 'collections___metafields___internal___type'
  | 'collections___description'
  | 'collections___descriptionHtml'
  | 'collections___handle'
  | 'collections___legacyResourceId'
  | 'collections___productsCount'
  | 'collections___sortOrder'
  | 'collections___storefrontId'
  | 'collections___templateSuffix'
  | 'collections___title'
  | 'collections___updatedAt'
  | 'collections___productIds'
  | 'collections___shopifyId'
  | 'collections___id'
  | 'collections___parent___id'
  | 'collections___parent___parent___id'
  | 'collections___parent___parent___children'
  | 'collections___parent___children'
  | 'collections___parent___children___id'
  | 'collections___parent___children___children'
  | 'collections___parent___internal___content'
  | 'collections___parent___internal___contentDigest'
  | 'collections___parent___internal___description'
  | 'collections___parent___internal___fieldOwners'
  | 'collections___parent___internal___ignoreType'
  | 'collections___parent___internal___mediaType'
  | 'collections___parent___internal___owner'
  | 'collections___parent___internal___type'
  | 'collections___children'
  | 'collections___children___id'
  | 'collections___children___parent___id'
  | 'collections___children___parent___children'
  | 'collections___children___children'
  | 'collections___children___children___id'
  | 'collections___children___children___children'
  | 'collections___children___internal___content'
  | 'collections___children___internal___contentDigest'
  | 'collections___children___internal___description'
  | 'collections___children___internal___fieldOwners'
  | 'collections___children___internal___ignoreType'
  | 'collections___children___internal___mediaType'
  | 'collections___children___internal___owner'
  | 'collections___children___internal___type'
  | 'collections___internal___content'
  | 'collections___internal___contentDigest'
  | 'collections___internal___description'
  | 'collections___internal___fieldOwners'
  | 'collections___internal___ignoreType'
  | 'collections___internal___mediaType'
  | 'collections___internal___owner'
  | 'collections___internal___type'
  | 'storefrontId'
  | 'createdAt'
  | 'description'
  | 'descriptionHtml'
  | 'featuredImage___altText'
  | 'featuredImage___height'
  | 'featuredImage___id'
  | 'featuredImage___originalSrc'
  | 'featuredImage___transformedSrc'
  | 'featuredImage___width'
  | 'featuredMedia___alt'
  | 'featuredMedia___mediaContentType'
  | 'featuredMedia___preview___image___altText'
  | 'featuredMedia___preview___image___height'
  | 'featuredMedia___preview___image___id'
  | 'featuredMedia___preview___image___originalSrc'
  | 'featuredMedia___preview___image___transformedSrc'
  | 'featuredMedia___preview___image___width'
  | 'featuredMedia___preview___status'
  | 'featuredMedia___status'
  | 'giftCardTemplateSuffix'
  | 'handle'
  | 'hasOnlyDefaultVariant'
  | 'hasOutOfStockVariants'
  | 'isGiftCard'
  | 'legacyResourceId'
  | 'mediaCount'
  | 'onlineStorePreviewUrl'
  | 'options'
  | 'options___id'
  | 'options___name'
  | 'options___position'
  | 'options___values'
  | 'priceRangeV2___maxVariantPrice___amount'
  | 'priceRangeV2___maxVariantPrice___currencyCode'
  | 'priceRangeV2___minVariantPrice___amount'
  | 'priceRangeV2___minVariantPrice___currencyCode'
  | 'productType'
  | 'publishedAt'
  | 'requiresSellingPlan'
  | 'sellingPlanGroupCount'
  | 'status'
  | 'templateSuffix'
  | 'title'
  | 'totalInventory'
  | 'totalVariants'
  | 'tracksInventory'
  | 'updatedAt'
  | 'vendor'
  | 'shopifyId'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ShopifyProductGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductEdge>;
  nodes: Array<ShopifyProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyProductGroupConnectionDistinctArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductGroupConnectionMaxArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductGroupConnectionMinArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductGroupConnectionSumArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyProductFieldsEnum;
};

export type ShopifyProductSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyProductFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyProductImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductImageEdge>;
  nodes: Array<ShopifyProductImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductImageGroupConnection>;
};


export type ShopifyProductImageConnectionDistinctArgs = {
  field: ShopifyProductImageFieldsEnum;
};


export type ShopifyProductImageConnectionMaxArgs = {
  field: ShopifyProductImageFieldsEnum;
};


export type ShopifyProductImageConnectionMinArgs = {
  field: ShopifyProductImageFieldsEnum;
};


export type ShopifyProductImageConnectionSumArgs = {
  field: ShopifyProductImageFieldsEnum;
};


export type ShopifyProductImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyProductImageFieldsEnum;
};

export type ShopifyProductImageEdge = {
  next?: Maybe<ShopifyProductImage>;
  node: ShopifyProductImage;
  previous?: Maybe<ShopifyProductImage>;
};

export type ShopifyProductImageFieldsEnum =
  | 'product___tags'
  | 'product___variants'
  | 'product___variants___product___tags'
  | 'product___variants___product___variants'
  | 'product___variants___product___metafields'
  | 'product___variants___product___images'
  | 'product___variants___product___collections'
  | 'product___variants___product___storefrontId'
  | 'product___variants___product___createdAt'
  | 'product___variants___product___description'
  | 'product___variants___product___descriptionHtml'
  | 'product___variants___product___giftCardTemplateSuffix'
  | 'product___variants___product___handle'
  | 'product___variants___product___hasOnlyDefaultVariant'
  | 'product___variants___product___hasOutOfStockVariants'
  | 'product___variants___product___isGiftCard'
  | 'product___variants___product___legacyResourceId'
  | 'product___variants___product___mediaCount'
  | 'product___variants___product___onlineStorePreviewUrl'
  | 'product___variants___product___options'
  | 'product___variants___product___productType'
  | 'product___variants___product___publishedAt'
  | 'product___variants___product___requiresSellingPlan'
  | 'product___variants___product___sellingPlanGroupCount'
  | 'product___variants___product___status'
  | 'product___variants___product___templateSuffix'
  | 'product___variants___product___title'
  | 'product___variants___product___totalInventory'
  | 'product___variants___product___totalVariants'
  | 'product___variants___product___tracksInventory'
  | 'product___variants___product___updatedAt'
  | 'product___variants___product___vendor'
  | 'product___variants___product___shopifyId'
  | 'product___variants___product___id'
  | 'product___variants___product___children'
  | 'product___variants___metafields'
  | 'product___variants___metafields___createdAt'
  | 'product___variants___metafields___description'
  | 'product___variants___metafields___id'
  | 'product___variants___metafields___key'
  | 'product___variants___metafields___namespace'
  | 'product___variants___metafields___ownerType'
  | 'product___variants___metafields___updatedAt'
  | 'product___variants___metafields___value'
  | 'product___variants___metafields___type'
  | 'product___variants___metafields___valueType'
  | 'product___variants___metafields___children'
  | 'product___variants___availableForSale'
  | 'product___variants___barcode'
  | 'product___variants___compareAtPrice'
  | 'product___variants___createdAt'
  | 'product___variants___displayName'
  | 'product___variants___image___altText'
  | 'product___variants___image___height'
  | 'product___variants___image___id'
  | 'product___variants___image___originalSrc'
  | 'product___variants___image___transformedSrc'
  | 'product___variants___image___width'
  | 'product___variants___inventoryItem___id'
  | 'product___variants___inventoryItem___createdAt'
  | 'product___variants___inventoryItem___duplicateSkuCount'
  | 'product___variants___inventoryItem___legacyResourceId'
  | 'product___variants___inventoryItem___locationsCount'
  | 'product___variants___inventoryItem___requiresShipping'
  | 'product___variants___inventoryItem___sku'
  | 'product___variants___inventoryItem___tracked'
  | 'product___variants___inventoryItem___updatedAt'
  | 'product___variants___inventoryPolicy'
  | 'product___variants___inventoryQuantity'
  | 'product___variants___legacyResourceId'
  | 'product___variants___position'
  | 'product___variants___price'
  | 'product___variants___selectedOptions'
  | 'product___variants___selectedOptions___name'
  | 'product___variants___selectedOptions___value'
  | 'product___variants___sellingPlanGroupCount'
  | 'product___variants___sku'
  | 'product___variants___storefrontId'
  | 'product___variants___taxable'
  | 'product___variants___title'
  | 'product___variants___updatedAt'
  | 'product___variants___weight'
  | 'product___variants___weightUnit'
  | 'product___variants____xparentId'
  | 'product___variants___productId'
  | 'product___variants___shopifyId'
  | 'product___variants___id'
  | 'product___variants___parent___id'
  | 'product___variants___parent___children'
  | 'product___variants___children'
  | 'product___variants___children___id'
  | 'product___variants___children___children'
  | 'product___variants___internal___content'
  | 'product___variants___internal___contentDigest'
  | 'product___variants___internal___description'
  | 'product___variants___internal___fieldOwners'
  | 'product___variants___internal___ignoreType'
  | 'product___variants___internal___mediaType'
  | 'product___variants___internal___owner'
  | 'product___variants___internal___type'
  | 'product___metafields'
  | 'product___metafields___createdAt'
  | 'product___metafields___description'
  | 'product___metafields___id'
  | 'product___metafields___key'
  | 'product___metafields___namespace'
  | 'product___metafields___ownerType'
  | 'product___metafields___updatedAt'
  | 'product___metafields___value'
  | 'product___metafields___type'
  | 'product___metafields___valueType'
  | 'product___metafields___product___tags'
  | 'product___metafields___product___variants'
  | 'product___metafields___product___metafields'
  | 'product___metafields___product___images'
  | 'product___metafields___product___collections'
  | 'product___metafields___product___storefrontId'
  | 'product___metafields___product___createdAt'
  | 'product___metafields___product___description'
  | 'product___metafields___product___descriptionHtml'
  | 'product___metafields___product___giftCardTemplateSuffix'
  | 'product___metafields___product___handle'
  | 'product___metafields___product___hasOnlyDefaultVariant'
  | 'product___metafields___product___hasOutOfStockVariants'
  | 'product___metafields___product___isGiftCard'
  | 'product___metafields___product___legacyResourceId'
  | 'product___metafields___product___mediaCount'
  | 'product___metafields___product___onlineStorePreviewUrl'
  | 'product___metafields___product___options'
  | 'product___metafields___product___productType'
  | 'product___metafields___product___publishedAt'
  | 'product___metafields___product___requiresSellingPlan'
  | 'product___metafields___product___sellingPlanGroupCount'
  | 'product___metafields___product___status'
  | 'product___metafields___product___templateSuffix'
  | 'product___metafields___product___title'
  | 'product___metafields___product___totalInventory'
  | 'product___metafields___product___totalVariants'
  | 'product___metafields___product___tracksInventory'
  | 'product___metafields___product___updatedAt'
  | 'product___metafields___product___vendor'
  | 'product___metafields___product___shopifyId'
  | 'product___metafields___product___id'
  | 'product___metafields___product___children'
  | 'product___metafields___parent___id'
  | 'product___metafields___parent___children'
  | 'product___metafields___children'
  | 'product___metafields___children___id'
  | 'product___metafields___children___children'
  | 'product___metafields___internal___content'
  | 'product___metafields___internal___contentDigest'
  | 'product___metafields___internal___description'
  | 'product___metafields___internal___fieldOwners'
  | 'product___metafields___internal___ignoreType'
  | 'product___metafields___internal___mediaType'
  | 'product___metafields___internal___owner'
  | 'product___metafields___internal___type'
  | 'product___images'
  | 'product___images___product___tags'
  | 'product___images___product___variants'
  | 'product___images___product___metafields'
  | 'product___images___product___images'
  | 'product___images___product___collections'
  | 'product___images___product___storefrontId'
  | 'product___images___product___createdAt'
  | 'product___images___product___description'
  | 'product___images___product___descriptionHtml'
  | 'product___images___product___giftCardTemplateSuffix'
  | 'product___images___product___handle'
  | 'product___images___product___hasOnlyDefaultVariant'
  | 'product___images___product___hasOutOfStockVariants'
  | 'product___images___product___isGiftCard'
  | 'product___images___product___legacyResourceId'
  | 'product___images___product___mediaCount'
  | 'product___images___product___onlineStorePreviewUrl'
  | 'product___images___product___options'
  | 'product___images___product___productType'
  | 'product___images___product___publishedAt'
  | 'product___images___product___requiresSellingPlan'
  | 'product___images___product___sellingPlanGroupCount'
  | 'product___images___product___status'
  | 'product___images___product___templateSuffix'
  | 'product___images___product___title'
  | 'product___images___product___totalInventory'
  | 'product___images___product___totalVariants'
  | 'product___images___product___tracksInventory'
  | 'product___images___product___updatedAt'
  | 'product___images___product___vendor'
  | 'product___images___product___shopifyId'
  | 'product___images___product___id'
  | 'product___images___product___children'
  | 'product___images___altText'
  | 'product___images___height'
  | 'product___images___id'
  | 'product___images___originalSrc'
  | 'product___images___transformedSrc'
  | 'product___images___width'
  | 'product___images___src'
  | 'product___images____xparentId'
  | 'product___images___productId'
  | 'product___images___shopifyId'
  | 'product___images___parent___id'
  | 'product___images___parent___children'
  | 'product___images___children'
  | 'product___images___children___id'
  | 'product___images___children___children'
  | 'product___images___internal___content'
  | 'product___images___internal___contentDigest'
  | 'product___images___internal___description'
  | 'product___images___internal___fieldOwners'
  | 'product___images___internal___ignoreType'
  | 'product___images___internal___mediaType'
  | 'product___images___internal___owner'
  | 'product___images___internal___type'
  | 'product___collections'
  | 'product___collections___products'
  | 'product___collections___products___tags'
  | 'product___collections___products___variants'
  | 'product___collections___products___metafields'
  | 'product___collections___products___images'
  | 'product___collections___products___collections'
  | 'product___collections___products___storefrontId'
  | 'product___collections___products___createdAt'
  | 'product___collections___products___description'
  | 'product___collections___products___descriptionHtml'
  | 'product___collections___products___giftCardTemplateSuffix'
  | 'product___collections___products___handle'
  | 'product___collections___products___hasOnlyDefaultVariant'
  | 'product___collections___products___hasOutOfStockVariants'
  | 'product___collections___products___isGiftCard'
  | 'product___collections___products___legacyResourceId'
  | 'product___collections___products___mediaCount'
  | 'product___collections___products___onlineStorePreviewUrl'
  | 'product___collections___products___options'
  | 'product___collections___products___productType'
  | 'product___collections___products___publishedAt'
  | 'product___collections___products___requiresSellingPlan'
  | 'product___collections___products___sellingPlanGroupCount'
  | 'product___collections___products___status'
  | 'product___collections___products___templateSuffix'
  | 'product___collections___products___title'
  | 'product___collections___products___totalInventory'
  | 'product___collections___products___totalVariants'
  | 'product___collections___products___tracksInventory'
  | 'product___collections___products___updatedAt'
  | 'product___collections___products___vendor'
  | 'product___collections___products___shopifyId'
  | 'product___collections___products___id'
  | 'product___collections___products___children'
  | 'product___collections___metafields'
  | 'product___collections___metafields___createdAt'
  | 'product___collections___metafields___description'
  | 'product___collections___metafields___id'
  | 'product___collections___metafields___key'
  | 'product___collections___metafields___namespace'
  | 'product___collections___metafields___ownerType'
  | 'product___collections___metafields___updatedAt'
  | 'product___collections___metafields___value'
  | 'product___collections___metafields___type'
  | 'product___collections___metafields___valueType'
  | 'product___collections___metafields___children'
  | 'product___collections___description'
  | 'product___collections___descriptionHtml'
  | 'product___collections___handle'
  | 'product___collections___legacyResourceId'
  | 'product___collections___productsCount'
  | 'product___collections___sortOrder'
  | 'product___collections___storefrontId'
  | 'product___collections___templateSuffix'
  | 'product___collections___title'
  | 'product___collections___updatedAt'
  | 'product___collections___productIds'
  | 'product___collections___shopifyId'
  | 'product___collections___id'
  | 'product___collections___parent___id'
  | 'product___collections___parent___children'
  | 'product___collections___children'
  | 'product___collections___children___id'
  | 'product___collections___children___children'
  | 'product___collections___internal___content'
  | 'product___collections___internal___contentDigest'
  | 'product___collections___internal___description'
  | 'product___collections___internal___fieldOwners'
  | 'product___collections___internal___ignoreType'
  | 'product___collections___internal___mediaType'
  | 'product___collections___internal___owner'
  | 'product___collections___internal___type'
  | 'product___storefrontId'
  | 'product___createdAt'
  | 'product___description'
  | 'product___descriptionHtml'
  | 'product___featuredImage___altText'
  | 'product___featuredImage___height'
  | 'product___featuredImage___id'
  | 'product___featuredImage___originalSrc'
  | 'product___featuredImage___transformedSrc'
  | 'product___featuredImage___width'
  | 'product___featuredMedia___alt'
  | 'product___featuredMedia___mediaContentType'
  | 'product___featuredMedia___preview___status'
  | 'product___featuredMedia___status'
  | 'product___giftCardTemplateSuffix'
  | 'product___handle'
  | 'product___hasOnlyDefaultVariant'
  | 'product___hasOutOfStockVariants'
  | 'product___isGiftCard'
  | 'product___legacyResourceId'
  | 'product___mediaCount'
  | 'product___onlineStorePreviewUrl'
  | 'product___options'
  | 'product___options___id'
  | 'product___options___name'
  | 'product___options___position'
  | 'product___options___values'
  | 'product___priceRangeV2___maxVariantPrice___amount'
  | 'product___priceRangeV2___maxVariantPrice___currencyCode'
  | 'product___priceRangeV2___minVariantPrice___amount'
  | 'product___priceRangeV2___minVariantPrice___currencyCode'
  | 'product___productType'
  | 'product___publishedAt'
  | 'product___requiresSellingPlan'
  | 'product___sellingPlanGroupCount'
  | 'product___status'
  | 'product___templateSuffix'
  | 'product___title'
  | 'product___totalInventory'
  | 'product___totalVariants'
  | 'product___tracksInventory'
  | 'product___updatedAt'
  | 'product___vendor'
  | 'product___shopifyId'
  | 'product___id'
  | 'product___parent___id'
  | 'product___parent___parent___id'
  | 'product___parent___parent___children'
  | 'product___parent___children'
  | 'product___parent___children___id'
  | 'product___parent___children___children'
  | 'product___parent___internal___content'
  | 'product___parent___internal___contentDigest'
  | 'product___parent___internal___description'
  | 'product___parent___internal___fieldOwners'
  | 'product___parent___internal___ignoreType'
  | 'product___parent___internal___mediaType'
  | 'product___parent___internal___owner'
  | 'product___parent___internal___type'
  | 'product___children'
  | 'product___children___id'
  | 'product___children___parent___id'
  | 'product___children___parent___children'
  | 'product___children___children'
  | 'product___children___children___id'
  | 'product___children___children___children'
  | 'product___children___internal___content'
  | 'product___children___internal___contentDigest'
  | 'product___children___internal___description'
  | 'product___children___internal___fieldOwners'
  | 'product___children___internal___ignoreType'
  | 'product___children___internal___mediaType'
  | 'product___children___internal___owner'
  | 'product___children___internal___type'
  | 'product___internal___content'
  | 'product___internal___contentDigest'
  | 'product___internal___description'
  | 'product___internal___fieldOwners'
  | 'product___internal___ignoreType'
  | 'product___internal___mediaType'
  | 'product___internal___owner'
  | 'product___internal___type'
  | 'altText'
  | 'height'
  | 'id'
  | 'originalSrc'
  | 'transformedSrc'
  | 'width'
  | 'src'
  | '_xparentId'
  | 'productId'
  | 'shopifyId'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ShopifyProductImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductImageEdge>;
  nodes: Array<ShopifyProductImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductImageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyProductImageGroupConnectionDistinctArgs = {
  field: ShopifyProductImageFieldsEnum;
};


export type ShopifyProductImageGroupConnectionMaxArgs = {
  field: ShopifyProductImageFieldsEnum;
};


export type ShopifyProductImageGroupConnectionMinArgs = {
  field: ShopifyProductImageFieldsEnum;
};


export type ShopifyProductImageGroupConnectionSumArgs = {
  field: ShopifyProductImageFieldsEnum;
};


export type ShopifyProductImageGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyProductImageFieldsEnum;
};

export type ShopifyProductImageSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyProductImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyProductVariantConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductVariantEdge>;
  nodes: Array<ShopifyProductVariant>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductVariantGroupConnection>;
};


export type ShopifyProductVariantConnectionDistinctArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantConnectionMaxArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantConnectionMinArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantConnectionSumArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyProductVariantFieldsEnum;
};

export type ShopifyProductVariantEdge = {
  next?: Maybe<ShopifyProductVariant>;
  node: ShopifyProductVariant;
  previous?: Maybe<ShopifyProductVariant>;
};

export type ShopifyProductVariantFieldsEnum =
  | 'product___tags'
  | 'product___variants'
  | 'product___variants___product___tags'
  | 'product___variants___product___variants'
  | 'product___variants___product___metafields'
  | 'product___variants___product___images'
  | 'product___variants___product___collections'
  | 'product___variants___product___storefrontId'
  | 'product___variants___product___createdAt'
  | 'product___variants___product___description'
  | 'product___variants___product___descriptionHtml'
  | 'product___variants___product___giftCardTemplateSuffix'
  | 'product___variants___product___handle'
  | 'product___variants___product___hasOnlyDefaultVariant'
  | 'product___variants___product___hasOutOfStockVariants'
  | 'product___variants___product___isGiftCard'
  | 'product___variants___product___legacyResourceId'
  | 'product___variants___product___mediaCount'
  | 'product___variants___product___onlineStorePreviewUrl'
  | 'product___variants___product___options'
  | 'product___variants___product___productType'
  | 'product___variants___product___publishedAt'
  | 'product___variants___product___requiresSellingPlan'
  | 'product___variants___product___sellingPlanGroupCount'
  | 'product___variants___product___status'
  | 'product___variants___product___templateSuffix'
  | 'product___variants___product___title'
  | 'product___variants___product___totalInventory'
  | 'product___variants___product___totalVariants'
  | 'product___variants___product___tracksInventory'
  | 'product___variants___product___updatedAt'
  | 'product___variants___product___vendor'
  | 'product___variants___product___shopifyId'
  | 'product___variants___product___id'
  | 'product___variants___product___children'
  | 'product___variants___metafields'
  | 'product___variants___metafields___createdAt'
  | 'product___variants___metafields___description'
  | 'product___variants___metafields___id'
  | 'product___variants___metafields___key'
  | 'product___variants___metafields___namespace'
  | 'product___variants___metafields___ownerType'
  | 'product___variants___metafields___updatedAt'
  | 'product___variants___metafields___value'
  | 'product___variants___metafields___type'
  | 'product___variants___metafields___valueType'
  | 'product___variants___metafields___children'
  | 'product___variants___availableForSale'
  | 'product___variants___barcode'
  | 'product___variants___compareAtPrice'
  | 'product___variants___createdAt'
  | 'product___variants___displayName'
  | 'product___variants___image___altText'
  | 'product___variants___image___height'
  | 'product___variants___image___id'
  | 'product___variants___image___originalSrc'
  | 'product___variants___image___transformedSrc'
  | 'product___variants___image___width'
  | 'product___variants___inventoryItem___id'
  | 'product___variants___inventoryItem___createdAt'
  | 'product___variants___inventoryItem___duplicateSkuCount'
  | 'product___variants___inventoryItem___legacyResourceId'
  | 'product___variants___inventoryItem___locationsCount'
  | 'product___variants___inventoryItem___requiresShipping'
  | 'product___variants___inventoryItem___sku'
  | 'product___variants___inventoryItem___tracked'
  | 'product___variants___inventoryItem___updatedAt'
  | 'product___variants___inventoryPolicy'
  | 'product___variants___inventoryQuantity'
  | 'product___variants___legacyResourceId'
  | 'product___variants___position'
  | 'product___variants___price'
  | 'product___variants___selectedOptions'
  | 'product___variants___selectedOptions___name'
  | 'product___variants___selectedOptions___value'
  | 'product___variants___sellingPlanGroupCount'
  | 'product___variants___sku'
  | 'product___variants___storefrontId'
  | 'product___variants___taxable'
  | 'product___variants___title'
  | 'product___variants___updatedAt'
  | 'product___variants___weight'
  | 'product___variants___weightUnit'
  | 'product___variants____xparentId'
  | 'product___variants___productId'
  | 'product___variants___shopifyId'
  | 'product___variants___id'
  | 'product___variants___parent___id'
  | 'product___variants___parent___children'
  | 'product___variants___children'
  | 'product___variants___children___id'
  | 'product___variants___children___children'
  | 'product___variants___internal___content'
  | 'product___variants___internal___contentDigest'
  | 'product___variants___internal___description'
  | 'product___variants___internal___fieldOwners'
  | 'product___variants___internal___ignoreType'
  | 'product___variants___internal___mediaType'
  | 'product___variants___internal___owner'
  | 'product___variants___internal___type'
  | 'product___metafields'
  | 'product___metafields___createdAt'
  | 'product___metafields___description'
  | 'product___metafields___id'
  | 'product___metafields___key'
  | 'product___metafields___namespace'
  | 'product___metafields___ownerType'
  | 'product___metafields___updatedAt'
  | 'product___metafields___value'
  | 'product___metafields___type'
  | 'product___metafields___valueType'
  | 'product___metafields___product___tags'
  | 'product___metafields___product___variants'
  | 'product___metafields___product___metafields'
  | 'product___metafields___product___images'
  | 'product___metafields___product___collections'
  | 'product___metafields___product___storefrontId'
  | 'product___metafields___product___createdAt'
  | 'product___metafields___product___description'
  | 'product___metafields___product___descriptionHtml'
  | 'product___metafields___product___giftCardTemplateSuffix'
  | 'product___metafields___product___handle'
  | 'product___metafields___product___hasOnlyDefaultVariant'
  | 'product___metafields___product___hasOutOfStockVariants'
  | 'product___metafields___product___isGiftCard'
  | 'product___metafields___product___legacyResourceId'
  | 'product___metafields___product___mediaCount'
  | 'product___metafields___product___onlineStorePreviewUrl'
  | 'product___metafields___product___options'
  | 'product___metafields___product___productType'
  | 'product___metafields___product___publishedAt'
  | 'product___metafields___product___requiresSellingPlan'
  | 'product___metafields___product___sellingPlanGroupCount'
  | 'product___metafields___product___status'
  | 'product___metafields___product___templateSuffix'
  | 'product___metafields___product___title'
  | 'product___metafields___product___totalInventory'
  | 'product___metafields___product___totalVariants'
  | 'product___metafields___product___tracksInventory'
  | 'product___metafields___product___updatedAt'
  | 'product___metafields___product___vendor'
  | 'product___metafields___product___shopifyId'
  | 'product___metafields___product___id'
  | 'product___metafields___product___children'
  | 'product___metafields___parent___id'
  | 'product___metafields___parent___children'
  | 'product___metafields___children'
  | 'product___metafields___children___id'
  | 'product___metafields___children___children'
  | 'product___metafields___internal___content'
  | 'product___metafields___internal___contentDigest'
  | 'product___metafields___internal___description'
  | 'product___metafields___internal___fieldOwners'
  | 'product___metafields___internal___ignoreType'
  | 'product___metafields___internal___mediaType'
  | 'product___metafields___internal___owner'
  | 'product___metafields___internal___type'
  | 'product___images'
  | 'product___images___product___tags'
  | 'product___images___product___variants'
  | 'product___images___product___metafields'
  | 'product___images___product___images'
  | 'product___images___product___collections'
  | 'product___images___product___storefrontId'
  | 'product___images___product___createdAt'
  | 'product___images___product___description'
  | 'product___images___product___descriptionHtml'
  | 'product___images___product___giftCardTemplateSuffix'
  | 'product___images___product___handle'
  | 'product___images___product___hasOnlyDefaultVariant'
  | 'product___images___product___hasOutOfStockVariants'
  | 'product___images___product___isGiftCard'
  | 'product___images___product___legacyResourceId'
  | 'product___images___product___mediaCount'
  | 'product___images___product___onlineStorePreviewUrl'
  | 'product___images___product___options'
  | 'product___images___product___productType'
  | 'product___images___product___publishedAt'
  | 'product___images___product___requiresSellingPlan'
  | 'product___images___product___sellingPlanGroupCount'
  | 'product___images___product___status'
  | 'product___images___product___templateSuffix'
  | 'product___images___product___title'
  | 'product___images___product___totalInventory'
  | 'product___images___product___totalVariants'
  | 'product___images___product___tracksInventory'
  | 'product___images___product___updatedAt'
  | 'product___images___product___vendor'
  | 'product___images___product___shopifyId'
  | 'product___images___product___id'
  | 'product___images___product___children'
  | 'product___images___altText'
  | 'product___images___height'
  | 'product___images___id'
  | 'product___images___originalSrc'
  | 'product___images___transformedSrc'
  | 'product___images___width'
  | 'product___images___src'
  | 'product___images____xparentId'
  | 'product___images___productId'
  | 'product___images___shopifyId'
  | 'product___images___parent___id'
  | 'product___images___parent___children'
  | 'product___images___children'
  | 'product___images___children___id'
  | 'product___images___children___children'
  | 'product___images___internal___content'
  | 'product___images___internal___contentDigest'
  | 'product___images___internal___description'
  | 'product___images___internal___fieldOwners'
  | 'product___images___internal___ignoreType'
  | 'product___images___internal___mediaType'
  | 'product___images___internal___owner'
  | 'product___images___internal___type'
  | 'product___collections'
  | 'product___collections___products'
  | 'product___collections___products___tags'
  | 'product___collections___products___variants'
  | 'product___collections___products___metafields'
  | 'product___collections___products___images'
  | 'product___collections___products___collections'
  | 'product___collections___products___storefrontId'
  | 'product___collections___products___createdAt'
  | 'product___collections___products___description'
  | 'product___collections___products___descriptionHtml'
  | 'product___collections___products___giftCardTemplateSuffix'
  | 'product___collections___products___handle'
  | 'product___collections___products___hasOnlyDefaultVariant'
  | 'product___collections___products___hasOutOfStockVariants'
  | 'product___collections___products___isGiftCard'
  | 'product___collections___products___legacyResourceId'
  | 'product___collections___products___mediaCount'
  | 'product___collections___products___onlineStorePreviewUrl'
  | 'product___collections___products___options'
  | 'product___collections___products___productType'
  | 'product___collections___products___publishedAt'
  | 'product___collections___products___requiresSellingPlan'
  | 'product___collections___products___sellingPlanGroupCount'
  | 'product___collections___products___status'
  | 'product___collections___products___templateSuffix'
  | 'product___collections___products___title'
  | 'product___collections___products___totalInventory'
  | 'product___collections___products___totalVariants'
  | 'product___collections___products___tracksInventory'
  | 'product___collections___products___updatedAt'
  | 'product___collections___products___vendor'
  | 'product___collections___products___shopifyId'
  | 'product___collections___products___id'
  | 'product___collections___products___children'
  | 'product___collections___metafields'
  | 'product___collections___metafields___createdAt'
  | 'product___collections___metafields___description'
  | 'product___collections___metafields___id'
  | 'product___collections___metafields___key'
  | 'product___collections___metafields___namespace'
  | 'product___collections___metafields___ownerType'
  | 'product___collections___metafields___updatedAt'
  | 'product___collections___metafields___value'
  | 'product___collections___metafields___type'
  | 'product___collections___metafields___valueType'
  | 'product___collections___metafields___children'
  | 'product___collections___description'
  | 'product___collections___descriptionHtml'
  | 'product___collections___handle'
  | 'product___collections___legacyResourceId'
  | 'product___collections___productsCount'
  | 'product___collections___sortOrder'
  | 'product___collections___storefrontId'
  | 'product___collections___templateSuffix'
  | 'product___collections___title'
  | 'product___collections___updatedAt'
  | 'product___collections___productIds'
  | 'product___collections___shopifyId'
  | 'product___collections___id'
  | 'product___collections___parent___id'
  | 'product___collections___parent___children'
  | 'product___collections___children'
  | 'product___collections___children___id'
  | 'product___collections___children___children'
  | 'product___collections___internal___content'
  | 'product___collections___internal___contentDigest'
  | 'product___collections___internal___description'
  | 'product___collections___internal___fieldOwners'
  | 'product___collections___internal___ignoreType'
  | 'product___collections___internal___mediaType'
  | 'product___collections___internal___owner'
  | 'product___collections___internal___type'
  | 'product___storefrontId'
  | 'product___createdAt'
  | 'product___description'
  | 'product___descriptionHtml'
  | 'product___featuredImage___altText'
  | 'product___featuredImage___height'
  | 'product___featuredImage___id'
  | 'product___featuredImage___originalSrc'
  | 'product___featuredImage___transformedSrc'
  | 'product___featuredImage___width'
  | 'product___featuredMedia___alt'
  | 'product___featuredMedia___mediaContentType'
  | 'product___featuredMedia___preview___status'
  | 'product___featuredMedia___status'
  | 'product___giftCardTemplateSuffix'
  | 'product___handle'
  | 'product___hasOnlyDefaultVariant'
  | 'product___hasOutOfStockVariants'
  | 'product___isGiftCard'
  | 'product___legacyResourceId'
  | 'product___mediaCount'
  | 'product___onlineStorePreviewUrl'
  | 'product___options'
  | 'product___options___id'
  | 'product___options___name'
  | 'product___options___position'
  | 'product___options___values'
  | 'product___priceRangeV2___maxVariantPrice___amount'
  | 'product___priceRangeV2___maxVariantPrice___currencyCode'
  | 'product___priceRangeV2___minVariantPrice___amount'
  | 'product___priceRangeV2___minVariantPrice___currencyCode'
  | 'product___productType'
  | 'product___publishedAt'
  | 'product___requiresSellingPlan'
  | 'product___sellingPlanGroupCount'
  | 'product___status'
  | 'product___templateSuffix'
  | 'product___title'
  | 'product___totalInventory'
  | 'product___totalVariants'
  | 'product___tracksInventory'
  | 'product___updatedAt'
  | 'product___vendor'
  | 'product___shopifyId'
  | 'product___id'
  | 'product___parent___id'
  | 'product___parent___parent___id'
  | 'product___parent___parent___children'
  | 'product___parent___children'
  | 'product___parent___children___id'
  | 'product___parent___children___children'
  | 'product___parent___internal___content'
  | 'product___parent___internal___contentDigest'
  | 'product___parent___internal___description'
  | 'product___parent___internal___fieldOwners'
  | 'product___parent___internal___ignoreType'
  | 'product___parent___internal___mediaType'
  | 'product___parent___internal___owner'
  | 'product___parent___internal___type'
  | 'product___children'
  | 'product___children___id'
  | 'product___children___parent___id'
  | 'product___children___parent___children'
  | 'product___children___children'
  | 'product___children___children___id'
  | 'product___children___children___children'
  | 'product___children___internal___content'
  | 'product___children___internal___contentDigest'
  | 'product___children___internal___description'
  | 'product___children___internal___fieldOwners'
  | 'product___children___internal___ignoreType'
  | 'product___children___internal___mediaType'
  | 'product___children___internal___owner'
  | 'product___children___internal___type'
  | 'product___internal___content'
  | 'product___internal___contentDigest'
  | 'product___internal___description'
  | 'product___internal___fieldOwners'
  | 'product___internal___ignoreType'
  | 'product___internal___mediaType'
  | 'product___internal___owner'
  | 'product___internal___type'
  | 'metafields'
  | 'metafields___createdAt'
  | 'metafields___description'
  | 'metafields___id'
  | 'metafields___key'
  | 'metafields___namespace'
  | 'metafields___ownerType'
  | 'metafields___updatedAt'
  | 'metafields___value'
  | 'metafields___type'
  | 'metafields___valueType'
  | 'metafields___productVariant___product___tags'
  | 'metafields___productVariant___product___variants'
  | 'metafields___productVariant___product___metafields'
  | 'metafields___productVariant___product___images'
  | 'metafields___productVariant___product___collections'
  | 'metafields___productVariant___product___storefrontId'
  | 'metafields___productVariant___product___createdAt'
  | 'metafields___productVariant___product___description'
  | 'metafields___productVariant___product___descriptionHtml'
  | 'metafields___productVariant___product___giftCardTemplateSuffix'
  | 'metafields___productVariant___product___handle'
  | 'metafields___productVariant___product___hasOnlyDefaultVariant'
  | 'metafields___productVariant___product___hasOutOfStockVariants'
  | 'metafields___productVariant___product___isGiftCard'
  | 'metafields___productVariant___product___legacyResourceId'
  | 'metafields___productVariant___product___mediaCount'
  | 'metafields___productVariant___product___onlineStorePreviewUrl'
  | 'metafields___productVariant___product___options'
  | 'metafields___productVariant___product___productType'
  | 'metafields___productVariant___product___publishedAt'
  | 'metafields___productVariant___product___requiresSellingPlan'
  | 'metafields___productVariant___product___sellingPlanGroupCount'
  | 'metafields___productVariant___product___status'
  | 'metafields___productVariant___product___templateSuffix'
  | 'metafields___productVariant___product___title'
  | 'metafields___productVariant___product___totalInventory'
  | 'metafields___productVariant___product___totalVariants'
  | 'metafields___productVariant___product___tracksInventory'
  | 'metafields___productVariant___product___updatedAt'
  | 'metafields___productVariant___product___vendor'
  | 'metafields___productVariant___product___shopifyId'
  | 'metafields___productVariant___product___id'
  | 'metafields___productVariant___product___children'
  | 'metafields___productVariant___metafields'
  | 'metafields___productVariant___metafields___createdAt'
  | 'metafields___productVariant___metafields___description'
  | 'metafields___productVariant___metafields___id'
  | 'metafields___productVariant___metafields___key'
  | 'metafields___productVariant___metafields___namespace'
  | 'metafields___productVariant___metafields___ownerType'
  | 'metafields___productVariant___metafields___updatedAt'
  | 'metafields___productVariant___metafields___value'
  | 'metafields___productVariant___metafields___type'
  | 'metafields___productVariant___metafields___valueType'
  | 'metafields___productVariant___metafields___children'
  | 'metafields___productVariant___availableForSale'
  | 'metafields___productVariant___barcode'
  | 'metafields___productVariant___compareAtPrice'
  | 'metafields___productVariant___createdAt'
  | 'metafields___productVariant___displayName'
  | 'metafields___productVariant___image___altText'
  | 'metafields___productVariant___image___height'
  | 'metafields___productVariant___image___id'
  | 'metafields___productVariant___image___originalSrc'
  | 'metafields___productVariant___image___transformedSrc'
  | 'metafields___productVariant___image___width'
  | 'metafields___productVariant___inventoryItem___id'
  | 'metafields___productVariant___inventoryItem___createdAt'
  | 'metafields___productVariant___inventoryItem___duplicateSkuCount'
  | 'metafields___productVariant___inventoryItem___legacyResourceId'
  | 'metafields___productVariant___inventoryItem___locationsCount'
  | 'metafields___productVariant___inventoryItem___requiresShipping'
  | 'metafields___productVariant___inventoryItem___sku'
  | 'metafields___productVariant___inventoryItem___tracked'
  | 'metafields___productVariant___inventoryItem___updatedAt'
  | 'metafields___productVariant___inventoryPolicy'
  | 'metafields___productVariant___inventoryQuantity'
  | 'metafields___productVariant___legacyResourceId'
  | 'metafields___productVariant___position'
  | 'metafields___productVariant___price'
  | 'metafields___productVariant___selectedOptions'
  | 'metafields___productVariant___selectedOptions___name'
  | 'metafields___productVariant___selectedOptions___value'
  | 'metafields___productVariant___sellingPlanGroupCount'
  | 'metafields___productVariant___sku'
  | 'metafields___productVariant___storefrontId'
  | 'metafields___productVariant___taxable'
  | 'metafields___productVariant___title'
  | 'metafields___productVariant___updatedAt'
  | 'metafields___productVariant___weight'
  | 'metafields___productVariant___weightUnit'
  | 'metafields___productVariant____xparentId'
  | 'metafields___productVariant___productId'
  | 'metafields___productVariant___shopifyId'
  | 'metafields___productVariant___id'
  | 'metafields___productVariant___parent___id'
  | 'metafields___productVariant___parent___children'
  | 'metafields___productVariant___children'
  | 'metafields___productVariant___children___id'
  | 'metafields___productVariant___children___children'
  | 'metafields___productVariant___internal___content'
  | 'metafields___productVariant___internal___contentDigest'
  | 'metafields___productVariant___internal___description'
  | 'metafields___productVariant___internal___fieldOwners'
  | 'metafields___productVariant___internal___ignoreType'
  | 'metafields___productVariant___internal___mediaType'
  | 'metafields___productVariant___internal___owner'
  | 'metafields___productVariant___internal___type'
  | 'metafields___parent___id'
  | 'metafields___parent___parent___id'
  | 'metafields___parent___parent___children'
  | 'metafields___parent___children'
  | 'metafields___parent___children___id'
  | 'metafields___parent___children___children'
  | 'metafields___parent___internal___content'
  | 'metafields___parent___internal___contentDigest'
  | 'metafields___parent___internal___description'
  | 'metafields___parent___internal___fieldOwners'
  | 'metafields___parent___internal___ignoreType'
  | 'metafields___parent___internal___mediaType'
  | 'metafields___parent___internal___owner'
  | 'metafields___parent___internal___type'
  | 'metafields___children'
  | 'metafields___children___id'
  | 'metafields___children___parent___id'
  | 'metafields___children___parent___children'
  | 'metafields___children___children'
  | 'metafields___children___children___id'
  | 'metafields___children___children___children'
  | 'metafields___children___internal___content'
  | 'metafields___children___internal___contentDigest'
  | 'metafields___children___internal___description'
  | 'metafields___children___internal___fieldOwners'
  | 'metafields___children___internal___ignoreType'
  | 'metafields___children___internal___mediaType'
  | 'metafields___children___internal___owner'
  | 'metafields___children___internal___type'
  | 'metafields___internal___content'
  | 'metafields___internal___contentDigest'
  | 'metafields___internal___description'
  | 'metafields___internal___fieldOwners'
  | 'metafields___internal___ignoreType'
  | 'metafields___internal___mediaType'
  | 'metafields___internal___owner'
  | 'metafields___internal___type'
  | 'availableForSale'
  | 'barcode'
  | 'compareAtPrice'
  | 'createdAt'
  | 'displayName'
  | 'image___altText'
  | 'image___height'
  | 'image___id'
  | 'image___originalSrc'
  | 'image___transformedSrc'
  | 'image___width'
  | 'inventoryItem___id'
  | 'inventoryItem___createdAt'
  | 'inventoryItem___duplicateSkuCount'
  | 'inventoryItem___legacyResourceId'
  | 'inventoryItem___locationsCount'
  | 'inventoryItem___requiresShipping'
  | 'inventoryItem___sku'
  | 'inventoryItem___tracked'
  | 'inventoryItem___trackedEditable___locked'
  | 'inventoryItem___updatedAt'
  | 'inventoryPolicy'
  | 'inventoryQuantity'
  | 'legacyResourceId'
  | 'position'
  | 'price'
  | 'selectedOptions'
  | 'selectedOptions___name'
  | 'selectedOptions___value'
  | 'sellingPlanGroupCount'
  | 'sku'
  | 'storefrontId'
  | 'taxable'
  | 'title'
  | 'updatedAt'
  | 'weight'
  | 'weightUnit'
  | '_xparentId'
  | 'productId'
  | 'shopifyId'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ShopifyProductVariantGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductVariantEdge>;
  nodes: Array<ShopifyProductVariant>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductVariantGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyProductVariantGroupConnectionDistinctArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantGroupConnectionMaxArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantGroupConnectionMinArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantGroupConnectionSumArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyProductVariantFieldsEnum;
};

export type ShopifyProductVariantSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyProductVariantFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyMetafieldInterfaceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyMetafieldInterfaceEdge>;
  nodes: Array<ShopifyMetafieldInterface>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyMetafieldInterfaceGroupConnection>;
};


export type ShopifyMetafieldInterfaceConnectionDistinctArgs = {
  field: ShopifyMetafieldInterfaceFieldsEnum;
};


export type ShopifyMetafieldInterfaceConnectionMaxArgs = {
  field: ShopifyMetafieldInterfaceFieldsEnum;
};


export type ShopifyMetafieldInterfaceConnectionMinArgs = {
  field: ShopifyMetafieldInterfaceFieldsEnum;
};


export type ShopifyMetafieldInterfaceConnectionSumArgs = {
  field: ShopifyMetafieldInterfaceFieldsEnum;
};


export type ShopifyMetafieldInterfaceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyMetafieldInterfaceFieldsEnum;
};

export type ShopifyMetafieldInterfaceEdge = {
  next?: Maybe<ShopifyMetafieldInterface>;
  node: ShopifyMetafieldInterface;
  previous?: Maybe<ShopifyMetafieldInterface>;
};

export type ShopifyMetafieldInterfaceFieldsEnum =
  | 'createdAt'
  | 'description'
  | 'id'
  | 'key'
  | 'namespace'
  | 'ownerType'
  | 'updatedAt'
  | 'value'
  | 'type'
  | 'valueType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ShopifyMetafieldInterfaceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyMetafieldInterfaceEdge>;
  nodes: Array<ShopifyMetafieldInterface>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyMetafieldInterfaceGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyMetafieldInterfaceGroupConnectionDistinctArgs = {
  field: ShopifyMetafieldInterfaceFieldsEnum;
};


export type ShopifyMetafieldInterfaceGroupConnectionMaxArgs = {
  field: ShopifyMetafieldInterfaceFieldsEnum;
};


export type ShopifyMetafieldInterfaceGroupConnectionMinArgs = {
  field: ShopifyMetafieldInterfaceFieldsEnum;
};


export type ShopifyMetafieldInterfaceGroupConnectionSumArgs = {
  field: ShopifyMetafieldInterfaceFieldsEnum;
};


export type ShopifyMetafieldInterfaceGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyMetafieldInterfaceFieldsEnum;
};

export type ShopifyMetafieldInterfaceFilterInput = {
  createdAt?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  key?: Maybe<StringQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  ownerType?: Maybe<StringQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  valueType?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ShopifyMetafieldInterfaceSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyMetafieldInterfaceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyProductMetafieldConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductMetafieldEdge>;
  nodes: Array<ShopifyProductMetafield>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductMetafieldGroupConnection>;
};


export type ShopifyProductMetafieldConnectionDistinctArgs = {
  field: ShopifyProductMetafieldFieldsEnum;
};


export type ShopifyProductMetafieldConnectionMaxArgs = {
  field: ShopifyProductMetafieldFieldsEnum;
};


export type ShopifyProductMetafieldConnectionMinArgs = {
  field: ShopifyProductMetafieldFieldsEnum;
};


export type ShopifyProductMetafieldConnectionSumArgs = {
  field: ShopifyProductMetafieldFieldsEnum;
};


export type ShopifyProductMetafieldConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyProductMetafieldFieldsEnum;
};

export type ShopifyProductMetafieldEdge = {
  next?: Maybe<ShopifyProductMetafield>;
  node: ShopifyProductMetafield;
  previous?: Maybe<ShopifyProductMetafield>;
};

export type ShopifyProductMetafieldFieldsEnum =
  | 'createdAt'
  | 'description'
  | 'id'
  | 'key'
  | 'namespace'
  | 'ownerType'
  | 'updatedAt'
  | 'value'
  | 'type'
  | 'valueType'
  | 'product___tags'
  | 'product___variants'
  | 'product___variants___product___tags'
  | 'product___variants___product___variants'
  | 'product___variants___product___metafields'
  | 'product___variants___product___images'
  | 'product___variants___product___collections'
  | 'product___variants___product___storefrontId'
  | 'product___variants___product___createdAt'
  | 'product___variants___product___description'
  | 'product___variants___product___descriptionHtml'
  | 'product___variants___product___giftCardTemplateSuffix'
  | 'product___variants___product___handle'
  | 'product___variants___product___hasOnlyDefaultVariant'
  | 'product___variants___product___hasOutOfStockVariants'
  | 'product___variants___product___isGiftCard'
  | 'product___variants___product___legacyResourceId'
  | 'product___variants___product___mediaCount'
  | 'product___variants___product___onlineStorePreviewUrl'
  | 'product___variants___product___options'
  | 'product___variants___product___productType'
  | 'product___variants___product___publishedAt'
  | 'product___variants___product___requiresSellingPlan'
  | 'product___variants___product___sellingPlanGroupCount'
  | 'product___variants___product___status'
  | 'product___variants___product___templateSuffix'
  | 'product___variants___product___title'
  | 'product___variants___product___totalInventory'
  | 'product___variants___product___totalVariants'
  | 'product___variants___product___tracksInventory'
  | 'product___variants___product___updatedAt'
  | 'product___variants___product___vendor'
  | 'product___variants___product___shopifyId'
  | 'product___variants___product___id'
  | 'product___variants___product___children'
  | 'product___variants___metafields'
  | 'product___variants___metafields___createdAt'
  | 'product___variants___metafields___description'
  | 'product___variants___metafields___id'
  | 'product___variants___metafields___key'
  | 'product___variants___metafields___namespace'
  | 'product___variants___metafields___ownerType'
  | 'product___variants___metafields___updatedAt'
  | 'product___variants___metafields___value'
  | 'product___variants___metafields___type'
  | 'product___variants___metafields___valueType'
  | 'product___variants___metafields___children'
  | 'product___variants___availableForSale'
  | 'product___variants___barcode'
  | 'product___variants___compareAtPrice'
  | 'product___variants___createdAt'
  | 'product___variants___displayName'
  | 'product___variants___image___altText'
  | 'product___variants___image___height'
  | 'product___variants___image___id'
  | 'product___variants___image___originalSrc'
  | 'product___variants___image___transformedSrc'
  | 'product___variants___image___width'
  | 'product___variants___inventoryItem___id'
  | 'product___variants___inventoryItem___createdAt'
  | 'product___variants___inventoryItem___duplicateSkuCount'
  | 'product___variants___inventoryItem___legacyResourceId'
  | 'product___variants___inventoryItem___locationsCount'
  | 'product___variants___inventoryItem___requiresShipping'
  | 'product___variants___inventoryItem___sku'
  | 'product___variants___inventoryItem___tracked'
  | 'product___variants___inventoryItem___updatedAt'
  | 'product___variants___inventoryPolicy'
  | 'product___variants___inventoryQuantity'
  | 'product___variants___legacyResourceId'
  | 'product___variants___position'
  | 'product___variants___price'
  | 'product___variants___selectedOptions'
  | 'product___variants___selectedOptions___name'
  | 'product___variants___selectedOptions___value'
  | 'product___variants___sellingPlanGroupCount'
  | 'product___variants___sku'
  | 'product___variants___storefrontId'
  | 'product___variants___taxable'
  | 'product___variants___title'
  | 'product___variants___updatedAt'
  | 'product___variants___weight'
  | 'product___variants___weightUnit'
  | 'product___variants____xparentId'
  | 'product___variants___productId'
  | 'product___variants___shopifyId'
  | 'product___variants___id'
  | 'product___variants___parent___id'
  | 'product___variants___parent___children'
  | 'product___variants___children'
  | 'product___variants___children___id'
  | 'product___variants___children___children'
  | 'product___variants___internal___content'
  | 'product___variants___internal___contentDigest'
  | 'product___variants___internal___description'
  | 'product___variants___internal___fieldOwners'
  | 'product___variants___internal___ignoreType'
  | 'product___variants___internal___mediaType'
  | 'product___variants___internal___owner'
  | 'product___variants___internal___type'
  | 'product___metafields'
  | 'product___metafields___createdAt'
  | 'product___metafields___description'
  | 'product___metafields___id'
  | 'product___metafields___key'
  | 'product___metafields___namespace'
  | 'product___metafields___ownerType'
  | 'product___metafields___updatedAt'
  | 'product___metafields___value'
  | 'product___metafields___type'
  | 'product___metafields___valueType'
  | 'product___metafields___product___tags'
  | 'product___metafields___product___variants'
  | 'product___metafields___product___metafields'
  | 'product___metafields___product___images'
  | 'product___metafields___product___collections'
  | 'product___metafields___product___storefrontId'
  | 'product___metafields___product___createdAt'
  | 'product___metafields___product___description'
  | 'product___metafields___product___descriptionHtml'
  | 'product___metafields___product___giftCardTemplateSuffix'
  | 'product___metafields___product___handle'
  | 'product___metafields___product___hasOnlyDefaultVariant'
  | 'product___metafields___product___hasOutOfStockVariants'
  | 'product___metafields___product___isGiftCard'
  | 'product___metafields___product___legacyResourceId'
  | 'product___metafields___product___mediaCount'
  | 'product___metafields___product___onlineStorePreviewUrl'
  | 'product___metafields___product___options'
  | 'product___metafields___product___productType'
  | 'product___metafields___product___publishedAt'
  | 'product___metafields___product___requiresSellingPlan'
  | 'product___metafields___product___sellingPlanGroupCount'
  | 'product___metafields___product___status'
  | 'product___metafields___product___templateSuffix'
  | 'product___metafields___product___title'
  | 'product___metafields___product___totalInventory'
  | 'product___metafields___product___totalVariants'
  | 'product___metafields___product___tracksInventory'
  | 'product___metafields___product___updatedAt'
  | 'product___metafields___product___vendor'
  | 'product___metafields___product___shopifyId'
  | 'product___metafields___product___id'
  | 'product___metafields___product___children'
  | 'product___metafields___parent___id'
  | 'product___metafields___parent___children'
  | 'product___metafields___children'
  | 'product___metafields___children___id'
  | 'product___metafields___children___children'
  | 'product___metafields___internal___content'
  | 'product___metafields___internal___contentDigest'
  | 'product___metafields___internal___description'
  | 'product___metafields___internal___fieldOwners'
  | 'product___metafields___internal___ignoreType'
  | 'product___metafields___internal___mediaType'
  | 'product___metafields___internal___owner'
  | 'product___metafields___internal___type'
  | 'product___images'
  | 'product___images___product___tags'
  | 'product___images___product___variants'
  | 'product___images___product___metafields'
  | 'product___images___product___images'
  | 'product___images___product___collections'
  | 'product___images___product___storefrontId'
  | 'product___images___product___createdAt'
  | 'product___images___product___description'
  | 'product___images___product___descriptionHtml'
  | 'product___images___product___giftCardTemplateSuffix'
  | 'product___images___product___handle'
  | 'product___images___product___hasOnlyDefaultVariant'
  | 'product___images___product___hasOutOfStockVariants'
  | 'product___images___product___isGiftCard'
  | 'product___images___product___legacyResourceId'
  | 'product___images___product___mediaCount'
  | 'product___images___product___onlineStorePreviewUrl'
  | 'product___images___product___options'
  | 'product___images___product___productType'
  | 'product___images___product___publishedAt'
  | 'product___images___product___requiresSellingPlan'
  | 'product___images___product___sellingPlanGroupCount'
  | 'product___images___product___status'
  | 'product___images___product___templateSuffix'
  | 'product___images___product___title'
  | 'product___images___product___totalInventory'
  | 'product___images___product___totalVariants'
  | 'product___images___product___tracksInventory'
  | 'product___images___product___updatedAt'
  | 'product___images___product___vendor'
  | 'product___images___product___shopifyId'
  | 'product___images___product___id'
  | 'product___images___product___children'
  | 'product___images___altText'
  | 'product___images___height'
  | 'product___images___id'
  | 'product___images___originalSrc'
  | 'product___images___transformedSrc'
  | 'product___images___width'
  | 'product___images___src'
  | 'product___images____xparentId'
  | 'product___images___productId'
  | 'product___images___shopifyId'
  | 'product___images___parent___id'
  | 'product___images___parent___children'
  | 'product___images___children'
  | 'product___images___children___id'
  | 'product___images___children___children'
  | 'product___images___internal___content'
  | 'product___images___internal___contentDigest'
  | 'product___images___internal___description'
  | 'product___images___internal___fieldOwners'
  | 'product___images___internal___ignoreType'
  | 'product___images___internal___mediaType'
  | 'product___images___internal___owner'
  | 'product___images___internal___type'
  | 'product___collections'
  | 'product___collections___products'
  | 'product___collections___products___tags'
  | 'product___collections___products___variants'
  | 'product___collections___products___metafields'
  | 'product___collections___products___images'
  | 'product___collections___products___collections'
  | 'product___collections___products___storefrontId'
  | 'product___collections___products___createdAt'
  | 'product___collections___products___description'
  | 'product___collections___products___descriptionHtml'
  | 'product___collections___products___giftCardTemplateSuffix'
  | 'product___collections___products___handle'
  | 'product___collections___products___hasOnlyDefaultVariant'
  | 'product___collections___products___hasOutOfStockVariants'
  | 'product___collections___products___isGiftCard'
  | 'product___collections___products___legacyResourceId'
  | 'product___collections___products___mediaCount'
  | 'product___collections___products___onlineStorePreviewUrl'
  | 'product___collections___products___options'
  | 'product___collections___products___productType'
  | 'product___collections___products___publishedAt'
  | 'product___collections___products___requiresSellingPlan'
  | 'product___collections___products___sellingPlanGroupCount'
  | 'product___collections___products___status'
  | 'product___collections___products___templateSuffix'
  | 'product___collections___products___title'
  | 'product___collections___products___totalInventory'
  | 'product___collections___products___totalVariants'
  | 'product___collections___products___tracksInventory'
  | 'product___collections___products___updatedAt'
  | 'product___collections___products___vendor'
  | 'product___collections___products___shopifyId'
  | 'product___collections___products___id'
  | 'product___collections___products___children'
  | 'product___collections___metafields'
  | 'product___collections___metafields___createdAt'
  | 'product___collections___metafields___description'
  | 'product___collections___metafields___id'
  | 'product___collections___metafields___key'
  | 'product___collections___metafields___namespace'
  | 'product___collections___metafields___ownerType'
  | 'product___collections___metafields___updatedAt'
  | 'product___collections___metafields___value'
  | 'product___collections___metafields___type'
  | 'product___collections___metafields___valueType'
  | 'product___collections___metafields___children'
  | 'product___collections___description'
  | 'product___collections___descriptionHtml'
  | 'product___collections___handle'
  | 'product___collections___legacyResourceId'
  | 'product___collections___productsCount'
  | 'product___collections___sortOrder'
  | 'product___collections___storefrontId'
  | 'product___collections___templateSuffix'
  | 'product___collections___title'
  | 'product___collections___updatedAt'
  | 'product___collections___productIds'
  | 'product___collections___shopifyId'
  | 'product___collections___id'
  | 'product___collections___parent___id'
  | 'product___collections___parent___children'
  | 'product___collections___children'
  | 'product___collections___children___id'
  | 'product___collections___children___children'
  | 'product___collections___internal___content'
  | 'product___collections___internal___contentDigest'
  | 'product___collections___internal___description'
  | 'product___collections___internal___fieldOwners'
  | 'product___collections___internal___ignoreType'
  | 'product___collections___internal___mediaType'
  | 'product___collections___internal___owner'
  | 'product___collections___internal___type'
  | 'product___storefrontId'
  | 'product___createdAt'
  | 'product___description'
  | 'product___descriptionHtml'
  | 'product___featuredImage___altText'
  | 'product___featuredImage___height'
  | 'product___featuredImage___id'
  | 'product___featuredImage___originalSrc'
  | 'product___featuredImage___transformedSrc'
  | 'product___featuredImage___width'
  | 'product___featuredMedia___alt'
  | 'product___featuredMedia___mediaContentType'
  | 'product___featuredMedia___preview___status'
  | 'product___featuredMedia___status'
  | 'product___giftCardTemplateSuffix'
  | 'product___handle'
  | 'product___hasOnlyDefaultVariant'
  | 'product___hasOutOfStockVariants'
  | 'product___isGiftCard'
  | 'product___legacyResourceId'
  | 'product___mediaCount'
  | 'product___onlineStorePreviewUrl'
  | 'product___options'
  | 'product___options___id'
  | 'product___options___name'
  | 'product___options___position'
  | 'product___options___values'
  | 'product___priceRangeV2___maxVariantPrice___amount'
  | 'product___priceRangeV2___maxVariantPrice___currencyCode'
  | 'product___priceRangeV2___minVariantPrice___amount'
  | 'product___priceRangeV2___minVariantPrice___currencyCode'
  | 'product___productType'
  | 'product___publishedAt'
  | 'product___requiresSellingPlan'
  | 'product___sellingPlanGroupCount'
  | 'product___status'
  | 'product___templateSuffix'
  | 'product___title'
  | 'product___totalInventory'
  | 'product___totalVariants'
  | 'product___tracksInventory'
  | 'product___updatedAt'
  | 'product___vendor'
  | 'product___shopifyId'
  | 'product___id'
  | 'product___parent___id'
  | 'product___parent___parent___id'
  | 'product___parent___parent___children'
  | 'product___parent___children'
  | 'product___parent___children___id'
  | 'product___parent___children___children'
  | 'product___parent___internal___content'
  | 'product___parent___internal___contentDigest'
  | 'product___parent___internal___description'
  | 'product___parent___internal___fieldOwners'
  | 'product___parent___internal___ignoreType'
  | 'product___parent___internal___mediaType'
  | 'product___parent___internal___owner'
  | 'product___parent___internal___type'
  | 'product___children'
  | 'product___children___id'
  | 'product___children___parent___id'
  | 'product___children___parent___children'
  | 'product___children___children'
  | 'product___children___children___id'
  | 'product___children___children___children'
  | 'product___children___internal___content'
  | 'product___children___internal___contentDigest'
  | 'product___children___internal___description'
  | 'product___children___internal___fieldOwners'
  | 'product___children___internal___ignoreType'
  | 'product___children___internal___mediaType'
  | 'product___children___internal___owner'
  | 'product___children___internal___type'
  | 'product___internal___content'
  | 'product___internal___contentDigest'
  | 'product___internal___description'
  | 'product___internal___fieldOwners'
  | 'product___internal___ignoreType'
  | 'product___internal___mediaType'
  | 'product___internal___owner'
  | 'product___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ShopifyProductMetafieldGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductMetafieldEdge>;
  nodes: Array<ShopifyProductMetafield>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductMetafieldGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyProductMetafieldGroupConnectionDistinctArgs = {
  field: ShopifyProductMetafieldFieldsEnum;
};


export type ShopifyProductMetafieldGroupConnectionMaxArgs = {
  field: ShopifyProductMetafieldFieldsEnum;
};


export type ShopifyProductMetafieldGroupConnectionMinArgs = {
  field: ShopifyProductMetafieldFieldsEnum;
};


export type ShopifyProductMetafieldGroupConnectionSumArgs = {
  field: ShopifyProductMetafieldFieldsEnum;
};


export type ShopifyProductMetafieldGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyProductMetafieldFieldsEnum;
};

export type ShopifyProductMetafieldSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyProductMetafieldFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyProductVariantMetafieldConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductVariantMetafieldEdge>;
  nodes: Array<ShopifyProductVariantMetafield>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductVariantMetafieldGroupConnection>;
};


export type ShopifyProductVariantMetafieldConnectionDistinctArgs = {
  field: ShopifyProductVariantMetafieldFieldsEnum;
};


export type ShopifyProductVariantMetafieldConnectionMaxArgs = {
  field: ShopifyProductVariantMetafieldFieldsEnum;
};


export type ShopifyProductVariantMetafieldConnectionMinArgs = {
  field: ShopifyProductVariantMetafieldFieldsEnum;
};


export type ShopifyProductVariantMetafieldConnectionSumArgs = {
  field: ShopifyProductVariantMetafieldFieldsEnum;
};


export type ShopifyProductVariantMetafieldConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyProductVariantMetafieldFieldsEnum;
};

export type ShopifyProductVariantMetafieldEdge = {
  next?: Maybe<ShopifyProductVariantMetafield>;
  node: ShopifyProductVariantMetafield;
  previous?: Maybe<ShopifyProductVariantMetafield>;
};

export type ShopifyProductVariantMetafieldFieldsEnum =
  | 'createdAt'
  | 'description'
  | 'id'
  | 'key'
  | 'namespace'
  | 'ownerType'
  | 'updatedAt'
  | 'value'
  | 'type'
  | 'valueType'
  | 'productVariant___product___tags'
  | 'productVariant___product___variants'
  | 'productVariant___product___variants___metafields'
  | 'productVariant___product___variants___availableForSale'
  | 'productVariant___product___variants___barcode'
  | 'productVariant___product___variants___compareAtPrice'
  | 'productVariant___product___variants___createdAt'
  | 'productVariant___product___variants___displayName'
  | 'productVariant___product___variants___inventoryPolicy'
  | 'productVariant___product___variants___inventoryQuantity'
  | 'productVariant___product___variants___legacyResourceId'
  | 'productVariant___product___variants___position'
  | 'productVariant___product___variants___price'
  | 'productVariant___product___variants___selectedOptions'
  | 'productVariant___product___variants___sellingPlanGroupCount'
  | 'productVariant___product___variants___sku'
  | 'productVariant___product___variants___storefrontId'
  | 'productVariant___product___variants___taxable'
  | 'productVariant___product___variants___title'
  | 'productVariant___product___variants___updatedAt'
  | 'productVariant___product___variants___weight'
  | 'productVariant___product___variants___weightUnit'
  | 'productVariant___product___variants____xparentId'
  | 'productVariant___product___variants___productId'
  | 'productVariant___product___variants___shopifyId'
  | 'productVariant___product___variants___id'
  | 'productVariant___product___variants___children'
  | 'productVariant___product___metafields'
  | 'productVariant___product___metafields___createdAt'
  | 'productVariant___product___metafields___description'
  | 'productVariant___product___metafields___id'
  | 'productVariant___product___metafields___key'
  | 'productVariant___product___metafields___namespace'
  | 'productVariant___product___metafields___ownerType'
  | 'productVariant___product___metafields___updatedAt'
  | 'productVariant___product___metafields___value'
  | 'productVariant___product___metafields___type'
  | 'productVariant___product___metafields___valueType'
  | 'productVariant___product___metafields___children'
  | 'productVariant___product___images'
  | 'productVariant___product___images___altText'
  | 'productVariant___product___images___height'
  | 'productVariant___product___images___id'
  | 'productVariant___product___images___originalSrc'
  | 'productVariant___product___images___transformedSrc'
  | 'productVariant___product___images___width'
  | 'productVariant___product___images___src'
  | 'productVariant___product___images____xparentId'
  | 'productVariant___product___images___productId'
  | 'productVariant___product___images___shopifyId'
  | 'productVariant___product___images___children'
  | 'productVariant___product___collections'
  | 'productVariant___product___collections___products'
  | 'productVariant___product___collections___metafields'
  | 'productVariant___product___collections___description'
  | 'productVariant___product___collections___descriptionHtml'
  | 'productVariant___product___collections___handle'
  | 'productVariant___product___collections___legacyResourceId'
  | 'productVariant___product___collections___productsCount'
  | 'productVariant___product___collections___sortOrder'
  | 'productVariant___product___collections___storefrontId'
  | 'productVariant___product___collections___templateSuffix'
  | 'productVariant___product___collections___title'
  | 'productVariant___product___collections___updatedAt'
  | 'productVariant___product___collections___productIds'
  | 'productVariant___product___collections___shopifyId'
  | 'productVariant___product___collections___id'
  | 'productVariant___product___collections___children'
  | 'productVariant___product___storefrontId'
  | 'productVariant___product___createdAt'
  | 'productVariant___product___description'
  | 'productVariant___product___descriptionHtml'
  | 'productVariant___product___featuredImage___altText'
  | 'productVariant___product___featuredImage___height'
  | 'productVariant___product___featuredImage___id'
  | 'productVariant___product___featuredImage___originalSrc'
  | 'productVariant___product___featuredImage___transformedSrc'
  | 'productVariant___product___featuredImage___width'
  | 'productVariant___product___featuredMedia___alt'
  | 'productVariant___product___featuredMedia___mediaContentType'
  | 'productVariant___product___featuredMedia___status'
  | 'productVariant___product___giftCardTemplateSuffix'
  | 'productVariant___product___handle'
  | 'productVariant___product___hasOnlyDefaultVariant'
  | 'productVariant___product___hasOutOfStockVariants'
  | 'productVariant___product___isGiftCard'
  | 'productVariant___product___legacyResourceId'
  | 'productVariant___product___mediaCount'
  | 'productVariant___product___onlineStorePreviewUrl'
  | 'productVariant___product___options'
  | 'productVariant___product___options___id'
  | 'productVariant___product___options___name'
  | 'productVariant___product___options___position'
  | 'productVariant___product___options___values'
  | 'productVariant___product___productType'
  | 'productVariant___product___publishedAt'
  | 'productVariant___product___requiresSellingPlan'
  | 'productVariant___product___sellingPlanGroupCount'
  | 'productVariant___product___status'
  | 'productVariant___product___templateSuffix'
  | 'productVariant___product___title'
  | 'productVariant___product___totalInventory'
  | 'productVariant___product___totalVariants'
  | 'productVariant___product___tracksInventory'
  | 'productVariant___product___updatedAt'
  | 'productVariant___product___vendor'
  | 'productVariant___product___shopifyId'
  | 'productVariant___product___id'
  | 'productVariant___product___parent___id'
  | 'productVariant___product___parent___children'
  | 'productVariant___product___children'
  | 'productVariant___product___children___id'
  | 'productVariant___product___children___children'
  | 'productVariant___product___internal___content'
  | 'productVariant___product___internal___contentDigest'
  | 'productVariant___product___internal___description'
  | 'productVariant___product___internal___fieldOwners'
  | 'productVariant___product___internal___ignoreType'
  | 'productVariant___product___internal___mediaType'
  | 'productVariant___product___internal___owner'
  | 'productVariant___product___internal___type'
  | 'productVariant___metafields'
  | 'productVariant___metafields___createdAt'
  | 'productVariant___metafields___description'
  | 'productVariant___metafields___id'
  | 'productVariant___metafields___key'
  | 'productVariant___metafields___namespace'
  | 'productVariant___metafields___ownerType'
  | 'productVariant___metafields___updatedAt'
  | 'productVariant___metafields___value'
  | 'productVariant___metafields___type'
  | 'productVariant___metafields___valueType'
  | 'productVariant___metafields___productVariant___metafields'
  | 'productVariant___metafields___productVariant___availableForSale'
  | 'productVariant___metafields___productVariant___barcode'
  | 'productVariant___metafields___productVariant___compareAtPrice'
  | 'productVariant___metafields___productVariant___createdAt'
  | 'productVariant___metafields___productVariant___displayName'
  | 'productVariant___metafields___productVariant___inventoryPolicy'
  | 'productVariant___metafields___productVariant___inventoryQuantity'
  | 'productVariant___metafields___productVariant___legacyResourceId'
  | 'productVariant___metafields___productVariant___position'
  | 'productVariant___metafields___productVariant___price'
  | 'productVariant___metafields___productVariant___selectedOptions'
  | 'productVariant___metafields___productVariant___sellingPlanGroupCount'
  | 'productVariant___metafields___productVariant___sku'
  | 'productVariant___metafields___productVariant___storefrontId'
  | 'productVariant___metafields___productVariant___taxable'
  | 'productVariant___metafields___productVariant___title'
  | 'productVariant___metafields___productVariant___updatedAt'
  | 'productVariant___metafields___productVariant___weight'
  | 'productVariant___metafields___productVariant___weightUnit'
  | 'productVariant___metafields___productVariant____xparentId'
  | 'productVariant___metafields___productVariant___productId'
  | 'productVariant___metafields___productVariant___shopifyId'
  | 'productVariant___metafields___productVariant___id'
  | 'productVariant___metafields___productVariant___children'
  | 'productVariant___metafields___parent___id'
  | 'productVariant___metafields___parent___children'
  | 'productVariant___metafields___children'
  | 'productVariant___metafields___children___id'
  | 'productVariant___metafields___children___children'
  | 'productVariant___metafields___internal___content'
  | 'productVariant___metafields___internal___contentDigest'
  | 'productVariant___metafields___internal___description'
  | 'productVariant___metafields___internal___fieldOwners'
  | 'productVariant___metafields___internal___ignoreType'
  | 'productVariant___metafields___internal___mediaType'
  | 'productVariant___metafields___internal___owner'
  | 'productVariant___metafields___internal___type'
  | 'productVariant___availableForSale'
  | 'productVariant___barcode'
  | 'productVariant___compareAtPrice'
  | 'productVariant___createdAt'
  | 'productVariant___displayName'
  | 'productVariant___image___altText'
  | 'productVariant___image___height'
  | 'productVariant___image___id'
  | 'productVariant___image___originalSrc'
  | 'productVariant___image___transformedSrc'
  | 'productVariant___image___width'
  | 'productVariant___inventoryItem___id'
  | 'productVariant___inventoryItem___createdAt'
  | 'productVariant___inventoryItem___duplicateSkuCount'
  | 'productVariant___inventoryItem___legacyResourceId'
  | 'productVariant___inventoryItem___locationsCount'
  | 'productVariant___inventoryItem___requiresShipping'
  | 'productVariant___inventoryItem___sku'
  | 'productVariant___inventoryItem___tracked'
  | 'productVariant___inventoryItem___trackedEditable___locked'
  | 'productVariant___inventoryItem___updatedAt'
  | 'productVariant___inventoryPolicy'
  | 'productVariant___inventoryQuantity'
  | 'productVariant___legacyResourceId'
  | 'productVariant___position'
  | 'productVariant___price'
  | 'productVariant___selectedOptions'
  | 'productVariant___selectedOptions___name'
  | 'productVariant___selectedOptions___value'
  | 'productVariant___sellingPlanGroupCount'
  | 'productVariant___sku'
  | 'productVariant___storefrontId'
  | 'productVariant___taxable'
  | 'productVariant___title'
  | 'productVariant___updatedAt'
  | 'productVariant___weight'
  | 'productVariant___weightUnit'
  | 'productVariant____xparentId'
  | 'productVariant___productId'
  | 'productVariant___shopifyId'
  | 'productVariant___id'
  | 'productVariant___parent___id'
  | 'productVariant___parent___parent___id'
  | 'productVariant___parent___parent___children'
  | 'productVariant___parent___children'
  | 'productVariant___parent___children___id'
  | 'productVariant___parent___children___children'
  | 'productVariant___parent___internal___content'
  | 'productVariant___parent___internal___contentDigest'
  | 'productVariant___parent___internal___description'
  | 'productVariant___parent___internal___fieldOwners'
  | 'productVariant___parent___internal___ignoreType'
  | 'productVariant___parent___internal___mediaType'
  | 'productVariant___parent___internal___owner'
  | 'productVariant___parent___internal___type'
  | 'productVariant___children'
  | 'productVariant___children___id'
  | 'productVariant___children___parent___id'
  | 'productVariant___children___parent___children'
  | 'productVariant___children___children'
  | 'productVariant___children___children___id'
  | 'productVariant___children___children___children'
  | 'productVariant___children___internal___content'
  | 'productVariant___children___internal___contentDigest'
  | 'productVariant___children___internal___description'
  | 'productVariant___children___internal___fieldOwners'
  | 'productVariant___children___internal___ignoreType'
  | 'productVariant___children___internal___mediaType'
  | 'productVariant___children___internal___owner'
  | 'productVariant___children___internal___type'
  | 'productVariant___internal___content'
  | 'productVariant___internal___contentDigest'
  | 'productVariant___internal___description'
  | 'productVariant___internal___fieldOwners'
  | 'productVariant___internal___ignoreType'
  | 'productVariant___internal___mediaType'
  | 'productVariant___internal___owner'
  | 'productVariant___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ShopifyProductVariantMetafieldGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductVariantMetafieldEdge>;
  nodes: Array<ShopifyProductVariantMetafield>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductVariantMetafieldGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyProductVariantMetafieldGroupConnectionDistinctArgs = {
  field: ShopifyProductVariantMetafieldFieldsEnum;
};


export type ShopifyProductVariantMetafieldGroupConnectionMaxArgs = {
  field: ShopifyProductVariantMetafieldFieldsEnum;
};


export type ShopifyProductVariantMetafieldGroupConnectionMinArgs = {
  field: ShopifyProductVariantMetafieldFieldsEnum;
};


export type ShopifyProductVariantMetafieldGroupConnectionSumArgs = {
  field: ShopifyProductVariantMetafieldFieldsEnum;
};


export type ShopifyProductVariantMetafieldGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyProductVariantMetafieldFieldsEnum;
};

export type ShopifyProductVariantMetafieldSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyProductVariantMetafieldFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyCollectionMetafieldConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyCollectionMetafieldEdge>;
  nodes: Array<ShopifyCollectionMetafield>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyCollectionMetafieldGroupConnection>;
};


export type ShopifyCollectionMetafieldConnectionDistinctArgs = {
  field: ShopifyCollectionMetafieldFieldsEnum;
};


export type ShopifyCollectionMetafieldConnectionMaxArgs = {
  field: ShopifyCollectionMetafieldFieldsEnum;
};


export type ShopifyCollectionMetafieldConnectionMinArgs = {
  field: ShopifyCollectionMetafieldFieldsEnum;
};


export type ShopifyCollectionMetafieldConnectionSumArgs = {
  field: ShopifyCollectionMetafieldFieldsEnum;
};


export type ShopifyCollectionMetafieldConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyCollectionMetafieldFieldsEnum;
};

export type ShopifyCollectionMetafieldEdge = {
  next?: Maybe<ShopifyCollectionMetafield>;
  node: ShopifyCollectionMetafield;
  previous?: Maybe<ShopifyCollectionMetafield>;
};

export type ShopifyCollectionMetafieldFieldsEnum =
  | 'createdAt'
  | 'description'
  | 'id'
  | 'key'
  | 'namespace'
  | 'ownerType'
  | 'updatedAt'
  | 'value'
  | 'type'
  | 'valueType'
  | 'collection___products'
  | 'collection___products___tags'
  | 'collection___products___variants'
  | 'collection___products___variants___metafields'
  | 'collection___products___variants___availableForSale'
  | 'collection___products___variants___barcode'
  | 'collection___products___variants___compareAtPrice'
  | 'collection___products___variants___createdAt'
  | 'collection___products___variants___displayName'
  | 'collection___products___variants___inventoryPolicy'
  | 'collection___products___variants___inventoryQuantity'
  | 'collection___products___variants___legacyResourceId'
  | 'collection___products___variants___position'
  | 'collection___products___variants___price'
  | 'collection___products___variants___selectedOptions'
  | 'collection___products___variants___sellingPlanGroupCount'
  | 'collection___products___variants___sku'
  | 'collection___products___variants___storefrontId'
  | 'collection___products___variants___taxable'
  | 'collection___products___variants___title'
  | 'collection___products___variants___updatedAt'
  | 'collection___products___variants___weight'
  | 'collection___products___variants___weightUnit'
  | 'collection___products___variants____xparentId'
  | 'collection___products___variants___productId'
  | 'collection___products___variants___shopifyId'
  | 'collection___products___variants___id'
  | 'collection___products___variants___children'
  | 'collection___products___metafields'
  | 'collection___products___metafields___createdAt'
  | 'collection___products___metafields___description'
  | 'collection___products___metafields___id'
  | 'collection___products___metafields___key'
  | 'collection___products___metafields___namespace'
  | 'collection___products___metafields___ownerType'
  | 'collection___products___metafields___updatedAt'
  | 'collection___products___metafields___value'
  | 'collection___products___metafields___type'
  | 'collection___products___metafields___valueType'
  | 'collection___products___metafields___children'
  | 'collection___products___images'
  | 'collection___products___images___altText'
  | 'collection___products___images___height'
  | 'collection___products___images___id'
  | 'collection___products___images___originalSrc'
  | 'collection___products___images___transformedSrc'
  | 'collection___products___images___width'
  | 'collection___products___images___src'
  | 'collection___products___images____xparentId'
  | 'collection___products___images___productId'
  | 'collection___products___images___shopifyId'
  | 'collection___products___images___children'
  | 'collection___products___collections'
  | 'collection___products___collections___products'
  | 'collection___products___collections___metafields'
  | 'collection___products___collections___description'
  | 'collection___products___collections___descriptionHtml'
  | 'collection___products___collections___handle'
  | 'collection___products___collections___legacyResourceId'
  | 'collection___products___collections___productsCount'
  | 'collection___products___collections___sortOrder'
  | 'collection___products___collections___storefrontId'
  | 'collection___products___collections___templateSuffix'
  | 'collection___products___collections___title'
  | 'collection___products___collections___updatedAt'
  | 'collection___products___collections___productIds'
  | 'collection___products___collections___shopifyId'
  | 'collection___products___collections___id'
  | 'collection___products___collections___children'
  | 'collection___products___storefrontId'
  | 'collection___products___createdAt'
  | 'collection___products___description'
  | 'collection___products___descriptionHtml'
  | 'collection___products___featuredImage___altText'
  | 'collection___products___featuredImage___height'
  | 'collection___products___featuredImage___id'
  | 'collection___products___featuredImage___originalSrc'
  | 'collection___products___featuredImage___transformedSrc'
  | 'collection___products___featuredImage___width'
  | 'collection___products___featuredMedia___alt'
  | 'collection___products___featuredMedia___mediaContentType'
  | 'collection___products___featuredMedia___status'
  | 'collection___products___giftCardTemplateSuffix'
  | 'collection___products___handle'
  | 'collection___products___hasOnlyDefaultVariant'
  | 'collection___products___hasOutOfStockVariants'
  | 'collection___products___isGiftCard'
  | 'collection___products___legacyResourceId'
  | 'collection___products___mediaCount'
  | 'collection___products___onlineStorePreviewUrl'
  | 'collection___products___options'
  | 'collection___products___options___id'
  | 'collection___products___options___name'
  | 'collection___products___options___position'
  | 'collection___products___options___values'
  | 'collection___products___productType'
  | 'collection___products___publishedAt'
  | 'collection___products___requiresSellingPlan'
  | 'collection___products___sellingPlanGroupCount'
  | 'collection___products___status'
  | 'collection___products___templateSuffix'
  | 'collection___products___title'
  | 'collection___products___totalInventory'
  | 'collection___products___totalVariants'
  | 'collection___products___tracksInventory'
  | 'collection___products___updatedAt'
  | 'collection___products___vendor'
  | 'collection___products___shopifyId'
  | 'collection___products___id'
  | 'collection___products___parent___id'
  | 'collection___products___parent___children'
  | 'collection___products___children'
  | 'collection___products___children___id'
  | 'collection___products___children___children'
  | 'collection___products___internal___content'
  | 'collection___products___internal___contentDigest'
  | 'collection___products___internal___description'
  | 'collection___products___internal___fieldOwners'
  | 'collection___products___internal___ignoreType'
  | 'collection___products___internal___mediaType'
  | 'collection___products___internal___owner'
  | 'collection___products___internal___type'
  | 'collection___metafields'
  | 'collection___metafields___createdAt'
  | 'collection___metafields___description'
  | 'collection___metafields___id'
  | 'collection___metafields___key'
  | 'collection___metafields___namespace'
  | 'collection___metafields___ownerType'
  | 'collection___metafields___updatedAt'
  | 'collection___metafields___value'
  | 'collection___metafields___type'
  | 'collection___metafields___valueType'
  | 'collection___metafields___collection___products'
  | 'collection___metafields___collection___metafields'
  | 'collection___metafields___collection___description'
  | 'collection___metafields___collection___descriptionHtml'
  | 'collection___metafields___collection___handle'
  | 'collection___metafields___collection___legacyResourceId'
  | 'collection___metafields___collection___productsCount'
  | 'collection___metafields___collection___sortOrder'
  | 'collection___metafields___collection___storefrontId'
  | 'collection___metafields___collection___templateSuffix'
  | 'collection___metafields___collection___title'
  | 'collection___metafields___collection___updatedAt'
  | 'collection___metafields___collection___productIds'
  | 'collection___metafields___collection___shopifyId'
  | 'collection___metafields___collection___id'
  | 'collection___metafields___collection___children'
  | 'collection___metafields___parent___id'
  | 'collection___metafields___parent___children'
  | 'collection___metafields___children'
  | 'collection___metafields___children___id'
  | 'collection___metafields___children___children'
  | 'collection___metafields___internal___content'
  | 'collection___metafields___internal___contentDigest'
  | 'collection___metafields___internal___description'
  | 'collection___metafields___internal___fieldOwners'
  | 'collection___metafields___internal___ignoreType'
  | 'collection___metafields___internal___mediaType'
  | 'collection___metafields___internal___owner'
  | 'collection___metafields___internal___type'
  | 'collection___description'
  | 'collection___descriptionHtml'
  | 'collection___handle'
  | 'collection___legacyResourceId'
  | 'collection___productsCount'
  | 'collection___sortOrder'
  | 'collection___storefrontId'
  | 'collection___templateSuffix'
  | 'collection___title'
  | 'collection___updatedAt'
  | 'collection___productIds'
  | 'collection___shopifyId'
  | 'collection___id'
  | 'collection___parent___id'
  | 'collection___parent___parent___id'
  | 'collection___parent___parent___children'
  | 'collection___parent___children'
  | 'collection___parent___children___id'
  | 'collection___parent___children___children'
  | 'collection___parent___internal___content'
  | 'collection___parent___internal___contentDigest'
  | 'collection___parent___internal___description'
  | 'collection___parent___internal___fieldOwners'
  | 'collection___parent___internal___ignoreType'
  | 'collection___parent___internal___mediaType'
  | 'collection___parent___internal___owner'
  | 'collection___parent___internal___type'
  | 'collection___children'
  | 'collection___children___id'
  | 'collection___children___parent___id'
  | 'collection___children___parent___children'
  | 'collection___children___children'
  | 'collection___children___children___id'
  | 'collection___children___children___children'
  | 'collection___children___internal___content'
  | 'collection___children___internal___contentDigest'
  | 'collection___children___internal___description'
  | 'collection___children___internal___fieldOwners'
  | 'collection___children___internal___ignoreType'
  | 'collection___children___internal___mediaType'
  | 'collection___children___internal___owner'
  | 'collection___children___internal___type'
  | 'collection___internal___content'
  | 'collection___internal___contentDigest'
  | 'collection___internal___description'
  | 'collection___internal___fieldOwners'
  | 'collection___internal___ignoreType'
  | 'collection___internal___mediaType'
  | 'collection___internal___owner'
  | 'collection___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ShopifyCollectionMetafieldGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyCollectionMetafieldEdge>;
  nodes: Array<ShopifyCollectionMetafield>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyCollectionMetafieldGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyCollectionMetafieldGroupConnectionDistinctArgs = {
  field: ShopifyCollectionMetafieldFieldsEnum;
};


export type ShopifyCollectionMetafieldGroupConnectionMaxArgs = {
  field: ShopifyCollectionMetafieldFieldsEnum;
};


export type ShopifyCollectionMetafieldGroupConnectionMinArgs = {
  field: ShopifyCollectionMetafieldFieldsEnum;
};


export type ShopifyCollectionMetafieldGroupConnectionSumArgs = {
  field: ShopifyCollectionMetafieldFieldsEnum;
};


export type ShopifyCollectionMetafieldGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyCollectionMetafieldFieldsEnum;
};

export type ShopifyCollectionMetafieldSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyCollectionMetafieldFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyCollectionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyCollectionEdge>;
  nodes: Array<ShopifyCollection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyCollectionGroupConnection>;
};


export type ShopifyCollectionConnectionDistinctArgs = {
  field: ShopifyCollectionFieldsEnum;
};


export type ShopifyCollectionConnectionMaxArgs = {
  field: ShopifyCollectionFieldsEnum;
};


export type ShopifyCollectionConnectionMinArgs = {
  field: ShopifyCollectionFieldsEnum;
};


export type ShopifyCollectionConnectionSumArgs = {
  field: ShopifyCollectionFieldsEnum;
};


export type ShopifyCollectionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyCollectionFieldsEnum;
};

export type ShopifyCollectionEdge = {
  next?: Maybe<ShopifyCollection>;
  node: ShopifyCollection;
  previous?: Maybe<ShopifyCollection>;
};

export type ShopifyCollectionFieldsEnum =
  | 'products'
  | 'products___tags'
  | 'products___variants'
  | 'products___variants___product___tags'
  | 'products___variants___product___variants'
  | 'products___variants___product___metafields'
  | 'products___variants___product___images'
  | 'products___variants___product___collections'
  | 'products___variants___product___storefrontId'
  | 'products___variants___product___createdAt'
  | 'products___variants___product___description'
  | 'products___variants___product___descriptionHtml'
  | 'products___variants___product___giftCardTemplateSuffix'
  | 'products___variants___product___handle'
  | 'products___variants___product___hasOnlyDefaultVariant'
  | 'products___variants___product___hasOutOfStockVariants'
  | 'products___variants___product___isGiftCard'
  | 'products___variants___product___legacyResourceId'
  | 'products___variants___product___mediaCount'
  | 'products___variants___product___onlineStorePreviewUrl'
  | 'products___variants___product___options'
  | 'products___variants___product___productType'
  | 'products___variants___product___publishedAt'
  | 'products___variants___product___requiresSellingPlan'
  | 'products___variants___product___sellingPlanGroupCount'
  | 'products___variants___product___status'
  | 'products___variants___product___templateSuffix'
  | 'products___variants___product___title'
  | 'products___variants___product___totalInventory'
  | 'products___variants___product___totalVariants'
  | 'products___variants___product___tracksInventory'
  | 'products___variants___product___updatedAt'
  | 'products___variants___product___vendor'
  | 'products___variants___product___shopifyId'
  | 'products___variants___product___id'
  | 'products___variants___product___children'
  | 'products___variants___metafields'
  | 'products___variants___metafields___createdAt'
  | 'products___variants___metafields___description'
  | 'products___variants___metafields___id'
  | 'products___variants___metafields___key'
  | 'products___variants___metafields___namespace'
  | 'products___variants___metafields___ownerType'
  | 'products___variants___metafields___updatedAt'
  | 'products___variants___metafields___value'
  | 'products___variants___metafields___type'
  | 'products___variants___metafields___valueType'
  | 'products___variants___metafields___children'
  | 'products___variants___availableForSale'
  | 'products___variants___barcode'
  | 'products___variants___compareAtPrice'
  | 'products___variants___createdAt'
  | 'products___variants___displayName'
  | 'products___variants___image___altText'
  | 'products___variants___image___height'
  | 'products___variants___image___id'
  | 'products___variants___image___originalSrc'
  | 'products___variants___image___transformedSrc'
  | 'products___variants___image___width'
  | 'products___variants___inventoryItem___id'
  | 'products___variants___inventoryItem___createdAt'
  | 'products___variants___inventoryItem___duplicateSkuCount'
  | 'products___variants___inventoryItem___legacyResourceId'
  | 'products___variants___inventoryItem___locationsCount'
  | 'products___variants___inventoryItem___requiresShipping'
  | 'products___variants___inventoryItem___sku'
  | 'products___variants___inventoryItem___tracked'
  | 'products___variants___inventoryItem___updatedAt'
  | 'products___variants___inventoryPolicy'
  | 'products___variants___inventoryQuantity'
  | 'products___variants___legacyResourceId'
  | 'products___variants___position'
  | 'products___variants___price'
  | 'products___variants___selectedOptions'
  | 'products___variants___selectedOptions___name'
  | 'products___variants___selectedOptions___value'
  | 'products___variants___sellingPlanGroupCount'
  | 'products___variants___sku'
  | 'products___variants___storefrontId'
  | 'products___variants___taxable'
  | 'products___variants___title'
  | 'products___variants___updatedAt'
  | 'products___variants___weight'
  | 'products___variants___weightUnit'
  | 'products___variants____xparentId'
  | 'products___variants___productId'
  | 'products___variants___shopifyId'
  | 'products___variants___id'
  | 'products___variants___parent___id'
  | 'products___variants___parent___children'
  | 'products___variants___children'
  | 'products___variants___children___id'
  | 'products___variants___children___children'
  | 'products___variants___internal___content'
  | 'products___variants___internal___contentDigest'
  | 'products___variants___internal___description'
  | 'products___variants___internal___fieldOwners'
  | 'products___variants___internal___ignoreType'
  | 'products___variants___internal___mediaType'
  | 'products___variants___internal___owner'
  | 'products___variants___internal___type'
  | 'products___metafields'
  | 'products___metafields___createdAt'
  | 'products___metafields___description'
  | 'products___metafields___id'
  | 'products___metafields___key'
  | 'products___metafields___namespace'
  | 'products___metafields___ownerType'
  | 'products___metafields___updatedAt'
  | 'products___metafields___value'
  | 'products___metafields___type'
  | 'products___metafields___valueType'
  | 'products___metafields___product___tags'
  | 'products___metafields___product___variants'
  | 'products___metafields___product___metafields'
  | 'products___metafields___product___images'
  | 'products___metafields___product___collections'
  | 'products___metafields___product___storefrontId'
  | 'products___metafields___product___createdAt'
  | 'products___metafields___product___description'
  | 'products___metafields___product___descriptionHtml'
  | 'products___metafields___product___giftCardTemplateSuffix'
  | 'products___metafields___product___handle'
  | 'products___metafields___product___hasOnlyDefaultVariant'
  | 'products___metafields___product___hasOutOfStockVariants'
  | 'products___metafields___product___isGiftCard'
  | 'products___metafields___product___legacyResourceId'
  | 'products___metafields___product___mediaCount'
  | 'products___metafields___product___onlineStorePreviewUrl'
  | 'products___metafields___product___options'
  | 'products___metafields___product___productType'
  | 'products___metafields___product___publishedAt'
  | 'products___metafields___product___requiresSellingPlan'
  | 'products___metafields___product___sellingPlanGroupCount'
  | 'products___metafields___product___status'
  | 'products___metafields___product___templateSuffix'
  | 'products___metafields___product___title'
  | 'products___metafields___product___totalInventory'
  | 'products___metafields___product___totalVariants'
  | 'products___metafields___product___tracksInventory'
  | 'products___metafields___product___updatedAt'
  | 'products___metafields___product___vendor'
  | 'products___metafields___product___shopifyId'
  | 'products___metafields___product___id'
  | 'products___metafields___product___children'
  | 'products___metafields___parent___id'
  | 'products___metafields___parent___children'
  | 'products___metafields___children'
  | 'products___metafields___children___id'
  | 'products___metafields___children___children'
  | 'products___metafields___internal___content'
  | 'products___metafields___internal___contentDigest'
  | 'products___metafields___internal___description'
  | 'products___metafields___internal___fieldOwners'
  | 'products___metafields___internal___ignoreType'
  | 'products___metafields___internal___mediaType'
  | 'products___metafields___internal___owner'
  | 'products___metafields___internal___type'
  | 'products___images'
  | 'products___images___product___tags'
  | 'products___images___product___variants'
  | 'products___images___product___metafields'
  | 'products___images___product___images'
  | 'products___images___product___collections'
  | 'products___images___product___storefrontId'
  | 'products___images___product___createdAt'
  | 'products___images___product___description'
  | 'products___images___product___descriptionHtml'
  | 'products___images___product___giftCardTemplateSuffix'
  | 'products___images___product___handle'
  | 'products___images___product___hasOnlyDefaultVariant'
  | 'products___images___product___hasOutOfStockVariants'
  | 'products___images___product___isGiftCard'
  | 'products___images___product___legacyResourceId'
  | 'products___images___product___mediaCount'
  | 'products___images___product___onlineStorePreviewUrl'
  | 'products___images___product___options'
  | 'products___images___product___productType'
  | 'products___images___product___publishedAt'
  | 'products___images___product___requiresSellingPlan'
  | 'products___images___product___sellingPlanGroupCount'
  | 'products___images___product___status'
  | 'products___images___product___templateSuffix'
  | 'products___images___product___title'
  | 'products___images___product___totalInventory'
  | 'products___images___product___totalVariants'
  | 'products___images___product___tracksInventory'
  | 'products___images___product___updatedAt'
  | 'products___images___product___vendor'
  | 'products___images___product___shopifyId'
  | 'products___images___product___id'
  | 'products___images___product___children'
  | 'products___images___altText'
  | 'products___images___height'
  | 'products___images___id'
  | 'products___images___originalSrc'
  | 'products___images___transformedSrc'
  | 'products___images___width'
  | 'products___images___src'
  | 'products___images____xparentId'
  | 'products___images___productId'
  | 'products___images___shopifyId'
  | 'products___images___parent___id'
  | 'products___images___parent___children'
  | 'products___images___children'
  | 'products___images___children___id'
  | 'products___images___children___children'
  | 'products___images___internal___content'
  | 'products___images___internal___contentDigest'
  | 'products___images___internal___description'
  | 'products___images___internal___fieldOwners'
  | 'products___images___internal___ignoreType'
  | 'products___images___internal___mediaType'
  | 'products___images___internal___owner'
  | 'products___images___internal___type'
  | 'products___collections'
  | 'products___collections___products'
  | 'products___collections___products___tags'
  | 'products___collections___products___variants'
  | 'products___collections___products___metafields'
  | 'products___collections___products___images'
  | 'products___collections___products___collections'
  | 'products___collections___products___storefrontId'
  | 'products___collections___products___createdAt'
  | 'products___collections___products___description'
  | 'products___collections___products___descriptionHtml'
  | 'products___collections___products___giftCardTemplateSuffix'
  | 'products___collections___products___handle'
  | 'products___collections___products___hasOnlyDefaultVariant'
  | 'products___collections___products___hasOutOfStockVariants'
  | 'products___collections___products___isGiftCard'
  | 'products___collections___products___legacyResourceId'
  | 'products___collections___products___mediaCount'
  | 'products___collections___products___onlineStorePreviewUrl'
  | 'products___collections___products___options'
  | 'products___collections___products___productType'
  | 'products___collections___products___publishedAt'
  | 'products___collections___products___requiresSellingPlan'
  | 'products___collections___products___sellingPlanGroupCount'
  | 'products___collections___products___status'
  | 'products___collections___products___templateSuffix'
  | 'products___collections___products___title'
  | 'products___collections___products___totalInventory'
  | 'products___collections___products___totalVariants'
  | 'products___collections___products___tracksInventory'
  | 'products___collections___products___updatedAt'
  | 'products___collections___products___vendor'
  | 'products___collections___products___shopifyId'
  | 'products___collections___products___id'
  | 'products___collections___products___children'
  | 'products___collections___metafields'
  | 'products___collections___metafields___createdAt'
  | 'products___collections___metafields___description'
  | 'products___collections___metafields___id'
  | 'products___collections___metafields___key'
  | 'products___collections___metafields___namespace'
  | 'products___collections___metafields___ownerType'
  | 'products___collections___metafields___updatedAt'
  | 'products___collections___metafields___value'
  | 'products___collections___metafields___type'
  | 'products___collections___metafields___valueType'
  | 'products___collections___metafields___children'
  | 'products___collections___description'
  | 'products___collections___descriptionHtml'
  | 'products___collections___handle'
  | 'products___collections___legacyResourceId'
  | 'products___collections___productsCount'
  | 'products___collections___sortOrder'
  | 'products___collections___storefrontId'
  | 'products___collections___templateSuffix'
  | 'products___collections___title'
  | 'products___collections___updatedAt'
  | 'products___collections___productIds'
  | 'products___collections___shopifyId'
  | 'products___collections___id'
  | 'products___collections___parent___id'
  | 'products___collections___parent___children'
  | 'products___collections___children'
  | 'products___collections___children___id'
  | 'products___collections___children___children'
  | 'products___collections___internal___content'
  | 'products___collections___internal___contentDigest'
  | 'products___collections___internal___description'
  | 'products___collections___internal___fieldOwners'
  | 'products___collections___internal___ignoreType'
  | 'products___collections___internal___mediaType'
  | 'products___collections___internal___owner'
  | 'products___collections___internal___type'
  | 'products___storefrontId'
  | 'products___createdAt'
  | 'products___description'
  | 'products___descriptionHtml'
  | 'products___featuredImage___altText'
  | 'products___featuredImage___height'
  | 'products___featuredImage___id'
  | 'products___featuredImage___originalSrc'
  | 'products___featuredImage___transformedSrc'
  | 'products___featuredImage___width'
  | 'products___featuredMedia___alt'
  | 'products___featuredMedia___mediaContentType'
  | 'products___featuredMedia___preview___status'
  | 'products___featuredMedia___status'
  | 'products___giftCardTemplateSuffix'
  | 'products___handle'
  | 'products___hasOnlyDefaultVariant'
  | 'products___hasOutOfStockVariants'
  | 'products___isGiftCard'
  | 'products___legacyResourceId'
  | 'products___mediaCount'
  | 'products___onlineStorePreviewUrl'
  | 'products___options'
  | 'products___options___id'
  | 'products___options___name'
  | 'products___options___position'
  | 'products___options___values'
  | 'products___priceRangeV2___maxVariantPrice___amount'
  | 'products___priceRangeV2___maxVariantPrice___currencyCode'
  | 'products___priceRangeV2___minVariantPrice___amount'
  | 'products___priceRangeV2___minVariantPrice___currencyCode'
  | 'products___productType'
  | 'products___publishedAt'
  | 'products___requiresSellingPlan'
  | 'products___sellingPlanGroupCount'
  | 'products___status'
  | 'products___templateSuffix'
  | 'products___title'
  | 'products___totalInventory'
  | 'products___totalVariants'
  | 'products___tracksInventory'
  | 'products___updatedAt'
  | 'products___vendor'
  | 'products___shopifyId'
  | 'products___id'
  | 'products___parent___id'
  | 'products___parent___parent___id'
  | 'products___parent___parent___children'
  | 'products___parent___children'
  | 'products___parent___children___id'
  | 'products___parent___children___children'
  | 'products___parent___internal___content'
  | 'products___parent___internal___contentDigest'
  | 'products___parent___internal___description'
  | 'products___parent___internal___fieldOwners'
  | 'products___parent___internal___ignoreType'
  | 'products___parent___internal___mediaType'
  | 'products___parent___internal___owner'
  | 'products___parent___internal___type'
  | 'products___children'
  | 'products___children___id'
  | 'products___children___parent___id'
  | 'products___children___parent___children'
  | 'products___children___children'
  | 'products___children___children___id'
  | 'products___children___children___children'
  | 'products___children___internal___content'
  | 'products___children___internal___contentDigest'
  | 'products___children___internal___description'
  | 'products___children___internal___fieldOwners'
  | 'products___children___internal___ignoreType'
  | 'products___children___internal___mediaType'
  | 'products___children___internal___owner'
  | 'products___children___internal___type'
  | 'products___internal___content'
  | 'products___internal___contentDigest'
  | 'products___internal___description'
  | 'products___internal___fieldOwners'
  | 'products___internal___ignoreType'
  | 'products___internal___mediaType'
  | 'products___internal___owner'
  | 'products___internal___type'
  | 'metafields'
  | 'metafields___createdAt'
  | 'metafields___description'
  | 'metafields___id'
  | 'metafields___key'
  | 'metafields___namespace'
  | 'metafields___ownerType'
  | 'metafields___updatedAt'
  | 'metafields___value'
  | 'metafields___type'
  | 'metafields___valueType'
  | 'metafields___collection___products'
  | 'metafields___collection___products___tags'
  | 'metafields___collection___products___variants'
  | 'metafields___collection___products___metafields'
  | 'metafields___collection___products___images'
  | 'metafields___collection___products___collections'
  | 'metafields___collection___products___storefrontId'
  | 'metafields___collection___products___createdAt'
  | 'metafields___collection___products___description'
  | 'metafields___collection___products___descriptionHtml'
  | 'metafields___collection___products___giftCardTemplateSuffix'
  | 'metafields___collection___products___handle'
  | 'metafields___collection___products___hasOnlyDefaultVariant'
  | 'metafields___collection___products___hasOutOfStockVariants'
  | 'metafields___collection___products___isGiftCard'
  | 'metafields___collection___products___legacyResourceId'
  | 'metafields___collection___products___mediaCount'
  | 'metafields___collection___products___onlineStorePreviewUrl'
  | 'metafields___collection___products___options'
  | 'metafields___collection___products___productType'
  | 'metafields___collection___products___publishedAt'
  | 'metafields___collection___products___requiresSellingPlan'
  | 'metafields___collection___products___sellingPlanGroupCount'
  | 'metafields___collection___products___status'
  | 'metafields___collection___products___templateSuffix'
  | 'metafields___collection___products___title'
  | 'metafields___collection___products___totalInventory'
  | 'metafields___collection___products___totalVariants'
  | 'metafields___collection___products___tracksInventory'
  | 'metafields___collection___products___updatedAt'
  | 'metafields___collection___products___vendor'
  | 'metafields___collection___products___shopifyId'
  | 'metafields___collection___products___id'
  | 'metafields___collection___products___children'
  | 'metafields___collection___metafields'
  | 'metafields___collection___metafields___createdAt'
  | 'metafields___collection___metafields___description'
  | 'metafields___collection___metafields___id'
  | 'metafields___collection___metafields___key'
  | 'metafields___collection___metafields___namespace'
  | 'metafields___collection___metafields___ownerType'
  | 'metafields___collection___metafields___updatedAt'
  | 'metafields___collection___metafields___value'
  | 'metafields___collection___metafields___type'
  | 'metafields___collection___metafields___valueType'
  | 'metafields___collection___metafields___children'
  | 'metafields___collection___description'
  | 'metafields___collection___descriptionHtml'
  | 'metafields___collection___handle'
  | 'metafields___collection___legacyResourceId'
  | 'metafields___collection___productsCount'
  | 'metafields___collection___sortOrder'
  | 'metafields___collection___storefrontId'
  | 'metafields___collection___templateSuffix'
  | 'metafields___collection___title'
  | 'metafields___collection___updatedAt'
  | 'metafields___collection___productIds'
  | 'metafields___collection___shopifyId'
  | 'metafields___collection___id'
  | 'metafields___collection___parent___id'
  | 'metafields___collection___parent___children'
  | 'metafields___collection___children'
  | 'metafields___collection___children___id'
  | 'metafields___collection___children___children'
  | 'metafields___collection___internal___content'
  | 'metafields___collection___internal___contentDigest'
  | 'metafields___collection___internal___description'
  | 'metafields___collection___internal___fieldOwners'
  | 'metafields___collection___internal___ignoreType'
  | 'metafields___collection___internal___mediaType'
  | 'metafields___collection___internal___owner'
  | 'metafields___collection___internal___type'
  | 'metafields___parent___id'
  | 'metafields___parent___parent___id'
  | 'metafields___parent___parent___children'
  | 'metafields___parent___children'
  | 'metafields___parent___children___id'
  | 'metafields___parent___children___children'
  | 'metafields___parent___internal___content'
  | 'metafields___parent___internal___contentDigest'
  | 'metafields___parent___internal___description'
  | 'metafields___parent___internal___fieldOwners'
  | 'metafields___parent___internal___ignoreType'
  | 'metafields___parent___internal___mediaType'
  | 'metafields___parent___internal___owner'
  | 'metafields___parent___internal___type'
  | 'metafields___children'
  | 'metafields___children___id'
  | 'metafields___children___parent___id'
  | 'metafields___children___parent___children'
  | 'metafields___children___children'
  | 'metafields___children___children___id'
  | 'metafields___children___children___children'
  | 'metafields___children___internal___content'
  | 'metafields___children___internal___contentDigest'
  | 'metafields___children___internal___description'
  | 'metafields___children___internal___fieldOwners'
  | 'metafields___children___internal___ignoreType'
  | 'metafields___children___internal___mediaType'
  | 'metafields___children___internal___owner'
  | 'metafields___children___internal___type'
  | 'metafields___internal___content'
  | 'metafields___internal___contentDigest'
  | 'metafields___internal___description'
  | 'metafields___internal___fieldOwners'
  | 'metafields___internal___ignoreType'
  | 'metafields___internal___mediaType'
  | 'metafields___internal___owner'
  | 'metafields___internal___type'
  | 'description'
  | 'descriptionHtml'
  | 'handle'
  | 'legacyResourceId'
  | 'productsCount'
  | 'sortOrder'
  | 'storefrontId'
  | 'templateSuffix'
  | 'title'
  | 'updatedAt'
  | 'productIds'
  | 'shopifyId'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ShopifyCollectionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyCollectionEdge>;
  nodes: Array<ShopifyCollection>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyCollectionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyCollectionGroupConnectionDistinctArgs = {
  field: ShopifyCollectionFieldsEnum;
};


export type ShopifyCollectionGroupConnectionMaxArgs = {
  field: ShopifyCollectionFieldsEnum;
};


export type ShopifyCollectionGroupConnectionMinArgs = {
  field: ShopifyCollectionFieldsEnum;
};


export type ShopifyCollectionGroupConnectionSumArgs = {
  field: ShopifyCollectionFieldsEnum;
};


export type ShopifyCollectionGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyCollectionFieldsEnum;
};

export type ShopifyCollectionSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyCollectionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyLineItemFilterListInput = {
  elemMatch?: Maybe<ShopifyLineItemFilterInput>;
};

export type ShopifyLineItemFilterInput = {
  product?: Maybe<ShopifyProductFilterInput>;
  order?: Maybe<ShopifyOrderFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ShopifyOrderFilterInput = {
  lineItems?: Maybe<ShopifyLineItemFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ShopifyOrderConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyOrderEdge>;
  nodes: Array<ShopifyOrder>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyOrderGroupConnection>;
};


export type ShopifyOrderConnectionDistinctArgs = {
  field: ShopifyOrderFieldsEnum;
};


export type ShopifyOrderConnectionMaxArgs = {
  field: ShopifyOrderFieldsEnum;
};


export type ShopifyOrderConnectionMinArgs = {
  field: ShopifyOrderFieldsEnum;
};


export type ShopifyOrderConnectionSumArgs = {
  field: ShopifyOrderFieldsEnum;
};


export type ShopifyOrderConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyOrderFieldsEnum;
};

export type ShopifyOrderEdge = {
  next?: Maybe<ShopifyOrder>;
  node: ShopifyOrder;
  previous?: Maybe<ShopifyOrder>;
};

export type ShopifyOrderFieldsEnum =
  | 'lineItems'
  | 'lineItems___product___tags'
  | 'lineItems___product___variants'
  | 'lineItems___product___variants___metafields'
  | 'lineItems___product___variants___availableForSale'
  | 'lineItems___product___variants___barcode'
  | 'lineItems___product___variants___compareAtPrice'
  | 'lineItems___product___variants___createdAt'
  | 'lineItems___product___variants___displayName'
  | 'lineItems___product___variants___inventoryPolicy'
  | 'lineItems___product___variants___inventoryQuantity'
  | 'lineItems___product___variants___legacyResourceId'
  | 'lineItems___product___variants___position'
  | 'lineItems___product___variants___price'
  | 'lineItems___product___variants___selectedOptions'
  | 'lineItems___product___variants___sellingPlanGroupCount'
  | 'lineItems___product___variants___sku'
  | 'lineItems___product___variants___storefrontId'
  | 'lineItems___product___variants___taxable'
  | 'lineItems___product___variants___title'
  | 'lineItems___product___variants___updatedAt'
  | 'lineItems___product___variants___weight'
  | 'lineItems___product___variants___weightUnit'
  | 'lineItems___product___variants____xparentId'
  | 'lineItems___product___variants___productId'
  | 'lineItems___product___variants___shopifyId'
  | 'lineItems___product___variants___id'
  | 'lineItems___product___variants___children'
  | 'lineItems___product___metafields'
  | 'lineItems___product___metafields___createdAt'
  | 'lineItems___product___metafields___description'
  | 'lineItems___product___metafields___id'
  | 'lineItems___product___metafields___key'
  | 'lineItems___product___metafields___namespace'
  | 'lineItems___product___metafields___ownerType'
  | 'lineItems___product___metafields___updatedAt'
  | 'lineItems___product___metafields___value'
  | 'lineItems___product___metafields___type'
  | 'lineItems___product___metafields___valueType'
  | 'lineItems___product___metafields___children'
  | 'lineItems___product___images'
  | 'lineItems___product___images___altText'
  | 'lineItems___product___images___height'
  | 'lineItems___product___images___id'
  | 'lineItems___product___images___originalSrc'
  | 'lineItems___product___images___transformedSrc'
  | 'lineItems___product___images___width'
  | 'lineItems___product___images___src'
  | 'lineItems___product___images____xparentId'
  | 'lineItems___product___images___productId'
  | 'lineItems___product___images___shopifyId'
  | 'lineItems___product___images___children'
  | 'lineItems___product___collections'
  | 'lineItems___product___collections___products'
  | 'lineItems___product___collections___metafields'
  | 'lineItems___product___collections___description'
  | 'lineItems___product___collections___descriptionHtml'
  | 'lineItems___product___collections___handle'
  | 'lineItems___product___collections___legacyResourceId'
  | 'lineItems___product___collections___productsCount'
  | 'lineItems___product___collections___sortOrder'
  | 'lineItems___product___collections___storefrontId'
  | 'lineItems___product___collections___templateSuffix'
  | 'lineItems___product___collections___title'
  | 'lineItems___product___collections___updatedAt'
  | 'lineItems___product___collections___productIds'
  | 'lineItems___product___collections___shopifyId'
  | 'lineItems___product___collections___id'
  | 'lineItems___product___collections___children'
  | 'lineItems___product___storefrontId'
  | 'lineItems___product___createdAt'
  | 'lineItems___product___description'
  | 'lineItems___product___descriptionHtml'
  | 'lineItems___product___featuredImage___altText'
  | 'lineItems___product___featuredImage___height'
  | 'lineItems___product___featuredImage___id'
  | 'lineItems___product___featuredImage___originalSrc'
  | 'lineItems___product___featuredImage___transformedSrc'
  | 'lineItems___product___featuredImage___width'
  | 'lineItems___product___featuredMedia___alt'
  | 'lineItems___product___featuredMedia___mediaContentType'
  | 'lineItems___product___featuredMedia___status'
  | 'lineItems___product___giftCardTemplateSuffix'
  | 'lineItems___product___handle'
  | 'lineItems___product___hasOnlyDefaultVariant'
  | 'lineItems___product___hasOutOfStockVariants'
  | 'lineItems___product___isGiftCard'
  | 'lineItems___product___legacyResourceId'
  | 'lineItems___product___mediaCount'
  | 'lineItems___product___onlineStorePreviewUrl'
  | 'lineItems___product___options'
  | 'lineItems___product___options___id'
  | 'lineItems___product___options___name'
  | 'lineItems___product___options___position'
  | 'lineItems___product___options___values'
  | 'lineItems___product___productType'
  | 'lineItems___product___publishedAt'
  | 'lineItems___product___requiresSellingPlan'
  | 'lineItems___product___sellingPlanGroupCount'
  | 'lineItems___product___status'
  | 'lineItems___product___templateSuffix'
  | 'lineItems___product___title'
  | 'lineItems___product___totalInventory'
  | 'lineItems___product___totalVariants'
  | 'lineItems___product___tracksInventory'
  | 'lineItems___product___updatedAt'
  | 'lineItems___product___vendor'
  | 'lineItems___product___shopifyId'
  | 'lineItems___product___id'
  | 'lineItems___product___parent___id'
  | 'lineItems___product___parent___children'
  | 'lineItems___product___children'
  | 'lineItems___product___children___id'
  | 'lineItems___product___children___children'
  | 'lineItems___product___internal___content'
  | 'lineItems___product___internal___contentDigest'
  | 'lineItems___product___internal___description'
  | 'lineItems___product___internal___fieldOwners'
  | 'lineItems___product___internal___ignoreType'
  | 'lineItems___product___internal___mediaType'
  | 'lineItems___product___internal___owner'
  | 'lineItems___product___internal___type'
  | 'lineItems___order___lineItems'
  | 'lineItems___order___lineItems___id'
  | 'lineItems___order___lineItems___children'
  | 'lineItems___order___id'
  | 'lineItems___order___parent___id'
  | 'lineItems___order___parent___children'
  | 'lineItems___order___children'
  | 'lineItems___order___children___id'
  | 'lineItems___order___children___children'
  | 'lineItems___order___internal___content'
  | 'lineItems___order___internal___contentDigest'
  | 'lineItems___order___internal___description'
  | 'lineItems___order___internal___fieldOwners'
  | 'lineItems___order___internal___ignoreType'
  | 'lineItems___order___internal___mediaType'
  | 'lineItems___order___internal___owner'
  | 'lineItems___order___internal___type'
  | 'lineItems___id'
  | 'lineItems___parent___id'
  | 'lineItems___parent___parent___id'
  | 'lineItems___parent___parent___children'
  | 'lineItems___parent___children'
  | 'lineItems___parent___children___id'
  | 'lineItems___parent___children___children'
  | 'lineItems___parent___internal___content'
  | 'lineItems___parent___internal___contentDigest'
  | 'lineItems___parent___internal___description'
  | 'lineItems___parent___internal___fieldOwners'
  | 'lineItems___parent___internal___ignoreType'
  | 'lineItems___parent___internal___mediaType'
  | 'lineItems___parent___internal___owner'
  | 'lineItems___parent___internal___type'
  | 'lineItems___children'
  | 'lineItems___children___id'
  | 'lineItems___children___parent___id'
  | 'lineItems___children___parent___children'
  | 'lineItems___children___children'
  | 'lineItems___children___children___id'
  | 'lineItems___children___children___children'
  | 'lineItems___children___internal___content'
  | 'lineItems___children___internal___contentDigest'
  | 'lineItems___children___internal___description'
  | 'lineItems___children___internal___fieldOwners'
  | 'lineItems___children___internal___ignoreType'
  | 'lineItems___children___internal___mediaType'
  | 'lineItems___children___internal___owner'
  | 'lineItems___children___internal___type'
  | 'lineItems___internal___content'
  | 'lineItems___internal___contentDigest'
  | 'lineItems___internal___description'
  | 'lineItems___internal___fieldOwners'
  | 'lineItems___internal___ignoreType'
  | 'lineItems___internal___mediaType'
  | 'lineItems___internal___owner'
  | 'lineItems___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ShopifyOrderGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyOrderEdge>;
  nodes: Array<ShopifyOrder>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyOrderGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyOrderGroupConnectionDistinctArgs = {
  field: ShopifyOrderFieldsEnum;
};


export type ShopifyOrderGroupConnectionMaxArgs = {
  field: ShopifyOrderFieldsEnum;
};


export type ShopifyOrderGroupConnectionMinArgs = {
  field: ShopifyOrderFieldsEnum;
};


export type ShopifyOrderGroupConnectionSumArgs = {
  field: ShopifyOrderFieldsEnum;
};


export type ShopifyOrderGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyOrderFieldsEnum;
};

export type ShopifyOrderSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyOrderFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyLineItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyLineItemEdge>;
  nodes: Array<ShopifyLineItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyLineItemGroupConnection>;
};


export type ShopifyLineItemConnectionDistinctArgs = {
  field: ShopifyLineItemFieldsEnum;
};


export type ShopifyLineItemConnectionMaxArgs = {
  field: ShopifyLineItemFieldsEnum;
};


export type ShopifyLineItemConnectionMinArgs = {
  field: ShopifyLineItemFieldsEnum;
};


export type ShopifyLineItemConnectionSumArgs = {
  field: ShopifyLineItemFieldsEnum;
};


export type ShopifyLineItemConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyLineItemFieldsEnum;
};

export type ShopifyLineItemEdge = {
  next?: Maybe<ShopifyLineItem>;
  node: ShopifyLineItem;
  previous?: Maybe<ShopifyLineItem>;
};

export type ShopifyLineItemFieldsEnum =
  | 'product___tags'
  | 'product___variants'
  | 'product___variants___product___tags'
  | 'product___variants___product___variants'
  | 'product___variants___product___metafields'
  | 'product___variants___product___images'
  | 'product___variants___product___collections'
  | 'product___variants___product___storefrontId'
  | 'product___variants___product___createdAt'
  | 'product___variants___product___description'
  | 'product___variants___product___descriptionHtml'
  | 'product___variants___product___giftCardTemplateSuffix'
  | 'product___variants___product___handle'
  | 'product___variants___product___hasOnlyDefaultVariant'
  | 'product___variants___product___hasOutOfStockVariants'
  | 'product___variants___product___isGiftCard'
  | 'product___variants___product___legacyResourceId'
  | 'product___variants___product___mediaCount'
  | 'product___variants___product___onlineStorePreviewUrl'
  | 'product___variants___product___options'
  | 'product___variants___product___productType'
  | 'product___variants___product___publishedAt'
  | 'product___variants___product___requiresSellingPlan'
  | 'product___variants___product___sellingPlanGroupCount'
  | 'product___variants___product___status'
  | 'product___variants___product___templateSuffix'
  | 'product___variants___product___title'
  | 'product___variants___product___totalInventory'
  | 'product___variants___product___totalVariants'
  | 'product___variants___product___tracksInventory'
  | 'product___variants___product___updatedAt'
  | 'product___variants___product___vendor'
  | 'product___variants___product___shopifyId'
  | 'product___variants___product___id'
  | 'product___variants___product___children'
  | 'product___variants___metafields'
  | 'product___variants___metafields___createdAt'
  | 'product___variants___metafields___description'
  | 'product___variants___metafields___id'
  | 'product___variants___metafields___key'
  | 'product___variants___metafields___namespace'
  | 'product___variants___metafields___ownerType'
  | 'product___variants___metafields___updatedAt'
  | 'product___variants___metafields___value'
  | 'product___variants___metafields___type'
  | 'product___variants___metafields___valueType'
  | 'product___variants___metafields___children'
  | 'product___variants___availableForSale'
  | 'product___variants___barcode'
  | 'product___variants___compareAtPrice'
  | 'product___variants___createdAt'
  | 'product___variants___displayName'
  | 'product___variants___image___altText'
  | 'product___variants___image___height'
  | 'product___variants___image___id'
  | 'product___variants___image___originalSrc'
  | 'product___variants___image___transformedSrc'
  | 'product___variants___image___width'
  | 'product___variants___inventoryItem___id'
  | 'product___variants___inventoryItem___createdAt'
  | 'product___variants___inventoryItem___duplicateSkuCount'
  | 'product___variants___inventoryItem___legacyResourceId'
  | 'product___variants___inventoryItem___locationsCount'
  | 'product___variants___inventoryItem___requiresShipping'
  | 'product___variants___inventoryItem___sku'
  | 'product___variants___inventoryItem___tracked'
  | 'product___variants___inventoryItem___updatedAt'
  | 'product___variants___inventoryPolicy'
  | 'product___variants___inventoryQuantity'
  | 'product___variants___legacyResourceId'
  | 'product___variants___position'
  | 'product___variants___price'
  | 'product___variants___selectedOptions'
  | 'product___variants___selectedOptions___name'
  | 'product___variants___selectedOptions___value'
  | 'product___variants___sellingPlanGroupCount'
  | 'product___variants___sku'
  | 'product___variants___storefrontId'
  | 'product___variants___taxable'
  | 'product___variants___title'
  | 'product___variants___updatedAt'
  | 'product___variants___weight'
  | 'product___variants___weightUnit'
  | 'product___variants____xparentId'
  | 'product___variants___productId'
  | 'product___variants___shopifyId'
  | 'product___variants___id'
  | 'product___variants___parent___id'
  | 'product___variants___parent___children'
  | 'product___variants___children'
  | 'product___variants___children___id'
  | 'product___variants___children___children'
  | 'product___variants___internal___content'
  | 'product___variants___internal___contentDigest'
  | 'product___variants___internal___description'
  | 'product___variants___internal___fieldOwners'
  | 'product___variants___internal___ignoreType'
  | 'product___variants___internal___mediaType'
  | 'product___variants___internal___owner'
  | 'product___variants___internal___type'
  | 'product___metafields'
  | 'product___metafields___createdAt'
  | 'product___metafields___description'
  | 'product___metafields___id'
  | 'product___metafields___key'
  | 'product___metafields___namespace'
  | 'product___metafields___ownerType'
  | 'product___metafields___updatedAt'
  | 'product___metafields___value'
  | 'product___metafields___type'
  | 'product___metafields___valueType'
  | 'product___metafields___product___tags'
  | 'product___metafields___product___variants'
  | 'product___metafields___product___metafields'
  | 'product___metafields___product___images'
  | 'product___metafields___product___collections'
  | 'product___metafields___product___storefrontId'
  | 'product___metafields___product___createdAt'
  | 'product___metafields___product___description'
  | 'product___metafields___product___descriptionHtml'
  | 'product___metafields___product___giftCardTemplateSuffix'
  | 'product___metafields___product___handle'
  | 'product___metafields___product___hasOnlyDefaultVariant'
  | 'product___metafields___product___hasOutOfStockVariants'
  | 'product___metafields___product___isGiftCard'
  | 'product___metafields___product___legacyResourceId'
  | 'product___metafields___product___mediaCount'
  | 'product___metafields___product___onlineStorePreviewUrl'
  | 'product___metafields___product___options'
  | 'product___metafields___product___productType'
  | 'product___metafields___product___publishedAt'
  | 'product___metafields___product___requiresSellingPlan'
  | 'product___metafields___product___sellingPlanGroupCount'
  | 'product___metafields___product___status'
  | 'product___metafields___product___templateSuffix'
  | 'product___metafields___product___title'
  | 'product___metafields___product___totalInventory'
  | 'product___metafields___product___totalVariants'
  | 'product___metafields___product___tracksInventory'
  | 'product___metafields___product___updatedAt'
  | 'product___metafields___product___vendor'
  | 'product___metafields___product___shopifyId'
  | 'product___metafields___product___id'
  | 'product___metafields___product___children'
  | 'product___metafields___parent___id'
  | 'product___metafields___parent___children'
  | 'product___metafields___children'
  | 'product___metafields___children___id'
  | 'product___metafields___children___children'
  | 'product___metafields___internal___content'
  | 'product___metafields___internal___contentDigest'
  | 'product___metafields___internal___description'
  | 'product___metafields___internal___fieldOwners'
  | 'product___metafields___internal___ignoreType'
  | 'product___metafields___internal___mediaType'
  | 'product___metafields___internal___owner'
  | 'product___metafields___internal___type'
  | 'product___images'
  | 'product___images___product___tags'
  | 'product___images___product___variants'
  | 'product___images___product___metafields'
  | 'product___images___product___images'
  | 'product___images___product___collections'
  | 'product___images___product___storefrontId'
  | 'product___images___product___createdAt'
  | 'product___images___product___description'
  | 'product___images___product___descriptionHtml'
  | 'product___images___product___giftCardTemplateSuffix'
  | 'product___images___product___handle'
  | 'product___images___product___hasOnlyDefaultVariant'
  | 'product___images___product___hasOutOfStockVariants'
  | 'product___images___product___isGiftCard'
  | 'product___images___product___legacyResourceId'
  | 'product___images___product___mediaCount'
  | 'product___images___product___onlineStorePreviewUrl'
  | 'product___images___product___options'
  | 'product___images___product___productType'
  | 'product___images___product___publishedAt'
  | 'product___images___product___requiresSellingPlan'
  | 'product___images___product___sellingPlanGroupCount'
  | 'product___images___product___status'
  | 'product___images___product___templateSuffix'
  | 'product___images___product___title'
  | 'product___images___product___totalInventory'
  | 'product___images___product___totalVariants'
  | 'product___images___product___tracksInventory'
  | 'product___images___product___updatedAt'
  | 'product___images___product___vendor'
  | 'product___images___product___shopifyId'
  | 'product___images___product___id'
  | 'product___images___product___children'
  | 'product___images___altText'
  | 'product___images___height'
  | 'product___images___id'
  | 'product___images___originalSrc'
  | 'product___images___transformedSrc'
  | 'product___images___width'
  | 'product___images___src'
  | 'product___images____xparentId'
  | 'product___images___productId'
  | 'product___images___shopifyId'
  | 'product___images___parent___id'
  | 'product___images___parent___children'
  | 'product___images___children'
  | 'product___images___children___id'
  | 'product___images___children___children'
  | 'product___images___internal___content'
  | 'product___images___internal___contentDigest'
  | 'product___images___internal___description'
  | 'product___images___internal___fieldOwners'
  | 'product___images___internal___ignoreType'
  | 'product___images___internal___mediaType'
  | 'product___images___internal___owner'
  | 'product___images___internal___type'
  | 'product___collections'
  | 'product___collections___products'
  | 'product___collections___products___tags'
  | 'product___collections___products___variants'
  | 'product___collections___products___metafields'
  | 'product___collections___products___images'
  | 'product___collections___products___collections'
  | 'product___collections___products___storefrontId'
  | 'product___collections___products___createdAt'
  | 'product___collections___products___description'
  | 'product___collections___products___descriptionHtml'
  | 'product___collections___products___giftCardTemplateSuffix'
  | 'product___collections___products___handle'
  | 'product___collections___products___hasOnlyDefaultVariant'
  | 'product___collections___products___hasOutOfStockVariants'
  | 'product___collections___products___isGiftCard'
  | 'product___collections___products___legacyResourceId'
  | 'product___collections___products___mediaCount'
  | 'product___collections___products___onlineStorePreviewUrl'
  | 'product___collections___products___options'
  | 'product___collections___products___productType'
  | 'product___collections___products___publishedAt'
  | 'product___collections___products___requiresSellingPlan'
  | 'product___collections___products___sellingPlanGroupCount'
  | 'product___collections___products___status'
  | 'product___collections___products___templateSuffix'
  | 'product___collections___products___title'
  | 'product___collections___products___totalInventory'
  | 'product___collections___products___totalVariants'
  | 'product___collections___products___tracksInventory'
  | 'product___collections___products___updatedAt'
  | 'product___collections___products___vendor'
  | 'product___collections___products___shopifyId'
  | 'product___collections___products___id'
  | 'product___collections___products___children'
  | 'product___collections___metafields'
  | 'product___collections___metafields___createdAt'
  | 'product___collections___metafields___description'
  | 'product___collections___metafields___id'
  | 'product___collections___metafields___key'
  | 'product___collections___metafields___namespace'
  | 'product___collections___metafields___ownerType'
  | 'product___collections___metafields___updatedAt'
  | 'product___collections___metafields___value'
  | 'product___collections___metafields___type'
  | 'product___collections___metafields___valueType'
  | 'product___collections___metafields___children'
  | 'product___collections___description'
  | 'product___collections___descriptionHtml'
  | 'product___collections___handle'
  | 'product___collections___legacyResourceId'
  | 'product___collections___productsCount'
  | 'product___collections___sortOrder'
  | 'product___collections___storefrontId'
  | 'product___collections___templateSuffix'
  | 'product___collections___title'
  | 'product___collections___updatedAt'
  | 'product___collections___productIds'
  | 'product___collections___shopifyId'
  | 'product___collections___id'
  | 'product___collections___parent___id'
  | 'product___collections___parent___children'
  | 'product___collections___children'
  | 'product___collections___children___id'
  | 'product___collections___children___children'
  | 'product___collections___internal___content'
  | 'product___collections___internal___contentDigest'
  | 'product___collections___internal___description'
  | 'product___collections___internal___fieldOwners'
  | 'product___collections___internal___ignoreType'
  | 'product___collections___internal___mediaType'
  | 'product___collections___internal___owner'
  | 'product___collections___internal___type'
  | 'product___storefrontId'
  | 'product___createdAt'
  | 'product___description'
  | 'product___descriptionHtml'
  | 'product___featuredImage___altText'
  | 'product___featuredImage___height'
  | 'product___featuredImage___id'
  | 'product___featuredImage___originalSrc'
  | 'product___featuredImage___transformedSrc'
  | 'product___featuredImage___width'
  | 'product___featuredMedia___alt'
  | 'product___featuredMedia___mediaContentType'
  | 'product___featuredMedia___preview___status'
  | 'product___featuredMedia___status'
  | 'product___giftCardTemplateSuffix'
  | 'product___handle'
  | 'product___hasOnlyDefaultVariant'
  | 'product___hasOutOfStockVariants'
  | 'product___isGiftCard'
  | 'product___legacyResourceId'
  | 'product___mediaCount'
  | 'product___onlineStorePreviewUrl'
  | 'product___options'
  | 'product___options___id'
  | 'product___options___name'
  | 'product___options___position'
  | 'product___options___values'
  | 'product___priceRangeV2___maxVariantPrice___amount'
  | 'product___priceRangeV2___maxVariantPrice___currencyCode'
  | 'product___priceRangeV2___minVariantPrice___amount'
  | 'product___priceRangeV2___minVariantPrice___currencyCode'
  | 'product___productType'
  | 'product___publishedAt'
  | 'product___requiresSellingPlan'
  | 'product___sellingPlanGroupCount'
  | 'product___status'
  | 'product___templateSuffix'
  | 'product___title'
  | 'product___totalInventory'
  | 'product___totalVariants'
  | 'product___tracksInventory'
  | 'product___updatedAt'
  | 'product___vendor'
  | 'product___shopifyId'
  | 'product___id'
  | 'product___parent___id'
  | 'product___parent___parent___id'
  | 'product___parent___parent___children'
  | 'product___parent___children'
  | 'product___parent___children___id'
  | 'product___parent___children___children'
  | 'product___parent___internal___content'
  | 'product___parent___internal___contentDigest'
  | 'product___parent___internal___description'
  | 'product___parent___internal___fieldOwners'
  | 'product___parent___internal___ignoreType'
  | 'product___parent___internal___mediaType'
  | 'product___parent___internal___owner'
  | 'product___parent___internal___type'
  | 'product___children'
  | 'product___children___id'
  | 'product___children___parent___id'
  | 'product___children___parent___children'
  | 'product___children___children'
  | 'product___children___children___id'
  | 'product___children___children___children'
  | 'product___children___internal___content'
  | 'product___children___internal___contentDigest'
  | 'product___children___internal___description'
  | 'product___children___internal___fieldOwners'
  | 'product___children___internal___ignoreType'
  | 'product___children___internal___mediaType'
  | 'product___children___internal___owner'
  | 'product___children___internal___type'
  | 'product___internal___content'
  | 'product___internal___contentDigest'
  | 'product___internal___description'
  | 'product___internal___fieldOwners'
  | 'product___internal___ignoreType'
  | 'product___internal___mediaType'
  | 'product___internal___owner'
  | 'product___internal___type'
  | 'order___lineItems'
  | 'order___lineItems___product___tags'
  | 'order___lineItems___product___variants'
  | 'order___lineItems___product___metafields'
  | 'order___lineItems___product___images'
  | 'order___lineItems___product___collections'
  | 'order___lineItems___product___storefrontId'
  | 'order___lineItems___product___createdAt'
  | 'order___lineItems___product___description'
  | 'order___lineItems___product___descriptionHtml'
  | 'order___lineItems___product___giftCardTemplateSuffix'
  | 'order___lineItems___product___handle'
  | 'order___lineItems___product___hasOnlyDefaultVariant'
  | 'order___lineItems___product___hasOutOfStockVariants'
  | 'order___lineItems___product___isGiftCard'
  | 'order___lineItems___product___legacyResourceId'
  | 'order___lineItems___product___mediaCount'
  | 'order___lineItems___product___onlineStorePreviewUrl'
  | 'order___lineItems___product___options'
  | 'order___lineItems___product___productType'
  | 'order___lineItems___product___publishedAt'
  | 'order___lineItems___product___requiresSellingPlan'
  | 'order___lineItems___product___sellingPlanGroupCount'
  | 'order___lineItems___product___status'
  | 'order___lineItems___product___templateSuffix'
  | 'order___lineItems___product___title'
  | 'order___lineItems___product___totalInventory'
  | 'order___lineItems___product___totalVariants'
  | 'order___lineItems___product___tracksInventory'
  | 'order___lineItems___product___updatedAt'
  | 'order___lineItems___product___vendor'
  | 'order___lineItems___product___shopifyId'
  | 'order___lineItems___product___id'
  | 'order___lineItems___product___children'
  | 'order___lineItems___order___lineItems'
  | 'order___lineItems___order___id'
  | 'order___lineItems___order___children'
  | 'order___lineItems___id'
  | 'order___lineItems___parent___id'
  | 'order___lineItems___parent___children'
  | 'order___lineItems___children'
  | 'order___lineItems___children___id'
  | 'order___lineItems___children___children'
  | 'order___lineItems___internal___content'
  | 'order___lineItems___internal___contentDigest'
  | 'order___lineItems___internal___description'
  | 'order___lineItems___internal___fieldOwners'
  | 'order___lineItems___internal___ignoreType'
  | 'order___lineItems___internal___mediaType'
  | 'order___lineItems___internal___owner'
  | 'order___lineItems___internal___type'
  | 'order___id'
  | 'order___parent___id'
  | 'order___parent___parent___id'
  | 'order___parent___parent___children'
  | 'order___parent___children'
  | 'order___parent___children___id'
  | 'order___parent___children___children'
  | 'order___parent___internal___content'
  | 'order___parent___internal___contentDigest'
  | 'order___parent___internal___description'
  | 'order___parent___internal___fieldOwners'
  | 'order___parent___internal___ignoreType'
  | 'order___parent___internal___mediaType'
  | 'order___parent___internal___owner'
  | 'order___parent___internal___type'
  | 'order___children'
  | 'order___children___id'
  | 'order___children___parent___id'
  | 'order___children___parent___children'
  | 'order___children___children'
  | 'order___children___children___id'
  | 'order___children___children___children'
  | 'order___children___internal___content'
  | 'order___children___internal___contentDigest'
  | 'order___children___internal___description'
  | 'order___children___internal___fieldOwners'
  | 'order___children___internal___ignoreType'
  | 'order___children___internal___mediaType'
  | 'order___children___internal___owner'
  | 'order___children___internal___type'
  | 'order___internal___content'
  | 'order___internal___contentDigest'
  | 'order___internal___description'
  | 'order___internal___fieldOwners'
  | 'order___internal___ignoreType'
  | 'order___internal___mediaType'
  | 'order___internal___owner'
  | 'order___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ShopifyLineItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyLineItemEdge>;
  nodes: Array<ShopifyLineItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyLineItemGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyLineItemGroupConnectionDistinctArgs = {
  field: ShopifyLineItemFieldsEnum;
};


export type ShopifyLineItemGroupConnectionMaxArgs = {
  field: ShopifyLineItemFieldsEnum;
};


export type ShopifyLineItemGroupConnectionMinArgs = {
  field: ShopifyLineItemFieldsEnum;
};


export type ShopifyLineItemGroupConnectionSumArgs = {
  field: ShopifyLineItemFieldsEnum;
};


export type ShopifyLineItemGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyLineItemFieldsEnum;
};

export type ShopifyLineItemSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyLineItemFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyLocationFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  activatable?: Maybe<BooleanQueryOperatorInput>;
  address?: Maybe<ShopifyLocationAddressFilterInput>;
  addressVerified?: Maybe<BooleanQueryOperatorInput>;
  deactivatable?: Maybe<BooleanQueryOperatorInput>;
  deletable?: Maybe<BooleanQueryOperatorInput>;
  fulfillsOnlineOrders?: Maybe<BooleanQueryOperatorInput>;
  hasActiveInventory?: Maybe<BooleanQueryOperatorInput>;
  hasUnfulfilledOrders?: Maybe<BooleanQueryOperatorInput>;
  isActive?: Maybe<BooleanQueryOperatorInput>;
  legacyResourceId?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  shipsInventory?: Maybe<BooleanQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyLocationAddressFilterInput = {
  address1?: Maybe<StringQueryOperatorInput>;
  city?: Maybe<StringQueryOperatorInput>;
  country?: Maybe<StringQueryOperatorInput>;
  countryCode?: Maybe<StringQueryOperatorInput>;
  formatted?: Maybe<StringQueryOperatorInput>;
  phone?: Maybe<StringQueryOperatorInput>;
  zip?: Maybe<StringQueryOperatorInput>;
};

export type ShopifyInventoryLevelConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyInventoryLevelEdge>;
  nodes: Array<ShopifyInventoryLevel>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyInventoryLevelGroupConnection>;
};


export type ShopifyInventoryLevelConnectionDistinctArgs = {
  field: ShopifyInventoryLevelFieldsEnum;
};


export type ShopifyInventoryLevelConnectionMaxArgs = {
  field: ShopifyInventoryLevelFieldsEnum;
};


export type ShopifyInventoryLevelConnectionMinArgs = {
  field: ShopifyInventoryLevelFieldsEnum;
};


export type ShopifyInventoryLevelConnectionSumArgs = {
  field: ShopifyInventoryLevelFieldsEnum;
};


export type ShopifyInventoryLevelConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyInventoryLevelFieldsEnum;
};

export type ShopifyInventoryLevelEdge = {
  next?: Maybe<ShopifyInventoryLevel>;
  node: ShopifyInventoryLevel;
  previous?: Maybe<ShopifyInventoryLevel>;
};

export type ShopifyInventoryLevelFieldsEnum =
  | 'location___id'
  | 'location___parent___id'
  | 'location___parent___parent___id'
  | 'location___parent___parent___children'
  | 'location___parent___children'
  | 'location___parent___children___id'
  | 'location___parent___children___children'
  | 'location___parent___internal___content'
  | 'location___parent___internal___contentDigest'
  | 'location___parent___internal___description'
  | 'location___parent___internal___fieldOwners'
  | 'location___parent___internal___ignoreType'
  | 'location___parent___internal___mediaType'
  | 'location___parent___internal___owner'
  | 'location___parent___internal___type'
  | 'location___children'
  | 'location___children___id'
  | 'location___children___parent___id'
  | 'location___children___parent___children'
  | 'location___children___children'
  | 'location___children___children___id'
  | 'location___children___children___children'
  | 'location___children___internal___content'
  | 'location___children___internal___contentDigest'
  | 'location___children___internal___description'
  | 'location___children___internal___fieldOwners'
  | 'location___children___internal___ignoreType'
  | 'location___children___internal___mediaType'
  | 'location___children___internal___owner'
  | 'location___children___internal___type'
  | 'location___internal___content'
  | 'location___internal___contentDigest'
  | 'location___internal___description'
  | 'location___internal___fieldOwners'
  | 'location___internal___ignoreType'
  | 'location___internal___mediaType'
  | 'location___internal___owner'
  | 'location___internal___type'
  | 'location___activatable'
  | 'location___address___address1'
  | 'location___address___city'
  | 'location___address___country'
  | 'location___address___countryCode'
  | 'location___address___formatted'
  | 'location___address___phone'
  | 'location___address___zip'
  | 'location___addressVerified'
  | 'location___deactivatable'
  | 'location___deletable'
  | 'location___fulfillsOnlineOrders'
  | 'location___hasActiveInventory'
  | 'location___hasUnfulfilledOrders'
  | 'location___isActive'
  | 'location___legacyResourceId'
  | 'location___name'
  | 'location___shipsInventory'
  | 'location___shopifyId'
  | 'available'
  | '_xparentId'
  | 'productVariantId'
  | 'shopifyId'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ShopifyInventoryLevelGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyInventoryLevelEdge>;
  nodes: Array<ShopifyInventoryLevel>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyInventoryLevelGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyInventoryLevelGroupConnectionDistinctArgs = {
  field: ShopifyInventoryLevelFieldsEnum;
};


export type ShopifyInventoryLevelGroupConnectionMaxArgs = {
  field: ShopifyInventoryLevelFieldsEnum;
};


export type ShopifyInventoryLevelGroupConnectionMinArgs = {
  field: ShopifyInventoryLevelFieldsEnum;
};


export type ShopifyInventoryLevelGroupConnectionSumArgs = {
  field: ShopifyInventoryLevelFieldsEnum;
};


export type ShopifyInventoryLevelGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyInventoryLevelFieldsEnum;
};

export type ShopifyInventoryLevelFilterInput = {
  location?: Maybe<ShopifyLocationFilterInput>;
  available?: Maybe<IntQueryOperatorInput>;
  _xparentId?: Maybe<StringQueryOperatorInput>;
  productVariantId?: Maybe<StringQueryOperatorInput>;
  shopifyId?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ShopifyInventoryLevelSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyInventoryLevelFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ShopifyLocationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyLocationEdge>;
  nodes: Array<ShopifyLocation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyLocationGroupConnection>;
};


export type ShopifyLocationConnectionDistinctArgs = {
  field: ShopifyLocationFieldsEnum;
};


export type ShopifyLocationConnectionMaxArgs = {
  field: ShopifyLocationFieldsEnum;
};


export type ShopifyLocationConnectionMinArgs = {
  field: ShopifyLocationFieldsEnum;
};


export type ShopifyLocationConnectionSumArgs = {
  field: ShopifyLocationFieldsEnum;
};


export type ShopifyLocationConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyLocationFieldsEnum;
};

export type ShopifyLocationEdge = {
  next?: Maybe<ShopifyLocation>;
  node: ShopifyLocation;
  previous?: Maybe<ShopifyLocation>;
};

export type ShopifyLocationFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'activatable'
  | 'address___address1'
  | 'address___city'
  | 'address___country'
  | 'address___countryCode'
  | 'address___formatted'
  | 'address___phone'
  | 'address___zip'
  | 'addressVerified'
  | 'deactivatable'
  | 'deletable'
  | 'fulfillsOnlineOrders'
  | 'hasActiveInventory'
  | 'hasUnfulfilledOrders'
  | 'isActive'
  | 'legacyResourceId'
  | 'name'
  | 'shipsInventory'
  | 'shopifyId';

export type ShopifyLocationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyLocationEdge>;
  nodes: Array<ShopifyLocation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyLocationGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyLocationGroupConnectionDistinctArgs = {
  field: ShopifyLocationFieldsEnum;
};


export type ShopifyLocationGroupConnectionMaxArgs = {
  field: ShopifyLocationFieldsEnum;
};


export type ShopifyLocationGroupConnectionMinArgs = {
  field: ShopifyLocationFieldsEnum;
};


export type ShopifyLocationGroupConnectionSumArgs = {
  field: ShopifyLocationFieldsEnum;
};


export type ShopifyLocationGroupConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ShopifyLocationFieldsEnum;
};

export type ShopifyLocationSortInput = {
  fields?: Maybe<Array<Maybe<ShopifyLocationFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { site?: { siteMetadata?: { title?: string | null | undefined, description?: string | null | undefined, author?: string | null | undefined } | null | undefined } | null | undefined };

export type AllCollectionsProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCollectionsProductsQuery = { allShopifyProduct: { totalCount: number, nodes: Array<{ id: string, title?: string | null | undefined, handle?: string | null | undefined, productType?: string | null | undefined, images?: Array<{ altText?: string | null | undefined, gatsbyImageData: any } | null | undefined> | null | undefined, variants?: Array<{ id: string, title?: string | null | undefined, storefrontId?: string | null | undefined, price?: string | null | undefined, compareAtPrice?: string | null | undefined, image?: { gatsbyImageData: any } | null | undefined } | null | undefined> | null | undefined }> } };

export type AllShopifyProductQueryVariables = Exact<{ [key: string]: never; }>;


export type AllShopifyProductQuery = { bestSellers: { nodes: Array<{ id: string, title?: string | null | undefined, handle?: string | null | undefined, productType?: string | null | undefined, images?: Array<{ altText?: string | null | undefined, gatsbyImageData: any } | null | undefined> | null | undefined, variants?: Array<{ id: string, title?: string | null | undefined, storefrontId?: string | null | undefined, price?: string | null | undefined, compareAtPrice?: string | null | undefined, image?: { gatsbyImageData: any } | null | undefined } | null | undefined> | null | undefined }> }, newReleases: { nodes: Array<{ id: string, title?: string | null | undefined, handle?: string | null | undefined, productType?: string | null | undefined, images?: Array<{ altText?: string | null | undefined, gatsbyImageData: any } | null | undefined> | null | undefined, variants?: Array<{ id: string, title?: string | null | undefined, storefrontId?: string | null | undefined, price?: string | null | undefined, compareAtPrice?: string | null | undefined, image?: { gatsbyImageData: any } | null | undefined } | null | undefined> | null | undefined }> } };

export type AllShopifyProductFragmentFragment = { id: string, title?: string | null | undefined, handle?: string | null | undefined, productType?: string | null | undefined, images?: Array<{ altText?: string | null | undefined, gatsbyImageData: any } | null | undefined> | null | undefined, variants?: Array<{ id: string, title?: string | null | undefined, storefrontId?: string | null | undefined, price?: string | null | undefined, compareAtPrice?: string | null | undefined, image?: { gatsbyImageData: any } | null | undefined } | null | undefined> | null | undefined };

export type ShopifyProductQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type ShopifyProductQuery = { productData?: { title?: string | null | undefined, description?: string | null | undefined, collections?: Array<{ id: string, title?: string | null | undefined } | null | undefined> | null | undefined, variants?: Array<{ id: string, title?: string | null | undefined, compareAtPrice?: string | null | undefined, price?: string | null | undefined, storefrontId?: string | null | undefined, image?: { gatsbyImageData: any } | null | undefined, selectedOptions?: Array<{ name?: string | null | undefined, value?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GatsbyImageSharpFixedFragment = { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFluidFragment = { base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type CreateShopifyProductQueryVariables = Exact<{ [key: string]: never; }>;


export type CreateShopifyProductQuery = { products: { nodes: Array<{ handle?: string | null | undefined, id: string, productType?: string | null | undefined }> } };
