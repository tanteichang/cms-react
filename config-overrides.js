const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
  // 按需加载
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config,
  )
  // 自定义 antd 主题
  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#009688" },
    javascriptEnabled: true,
  })(config, env)

  return config
}