$env:NODE_OPTIONS = "--openssl-legacy-provider"

> frontend@1.0.0 start
> webpack-dev-server --watch-content-base --open

(node:2904) [DEP0111] DeprecationWarning: Access to process.binding('http_parser') is deprecated.
(Use `node --trace-deprecation ...` to show where the warning was created)
i ｢wds｣: Project is running at http://localhost:8080/
i ｢wds｣: webpack output is served from /
i ｢wds｣: Content not from webpack is served from C:\Users\Bilal Shaikh\Desktop\bilal shaikh\projects\thefashionnook\frontend
node:internal/crypto/hash:69
  this[kHandle] = new _Hash(algorithm, xofLen);
                  ^

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:69:19)
    at Object.createHash (node:crypto:133:10)
    at module.exports (C:\Users\Bilal Shaikh\Desktop\bilal shaikh\projects\thefashionnook\frontend\node_modules\webpack\lib\util\createHash.js:135:53)  
    at NormalModule._initBuildHash (C:\Users\Bilal Shaikh\Desktop\bilal shaikh\projects\thefashionnook\frontend\node_modules\webpack\lib\NormalModule.js:417:16)
    at handleParseError (C:\Users\Bilal Shaikh\Desktop\bilal shaikh\projects\thefashionnook\frontend\node_modules\webpack\lib\NormalModule.js:471:10)   
    at C:\Users\Bilal Shaikh\Desktop\bilal shaikh\projects\thefashionnook\frontend\node_modules\webpack\lib\NormalModule.js:503:5
    at C:\Users\Bilal Shaikh\Desktop\bilal shaikh\projects\thefashionnook\frontend\node_modules\webpack\lib\NormalModule.js:358:12
    at C:\Users\Bilal Shaikh\Desktop\bilal shaikh\projects\thefashionnook\frontend\node_modules\loader-runner\lib\LoaderRunner.js:373:3
    at iterateNormalLoaders (C:\Users\Bilal Shaikh\Desktop\bilal shaikh\projects\thefashionnook\frontend\node_modules\loader-runner\lib\LoaderRunner.js:214:10)
    at Array.<anonymous> (C:\Users\Bilal Shaikh\Desktop\bilal shaikh\projects\thefashionnook\frontend\node_modules\loader-runner\lib\LoaderRunner.js:205:4) {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}