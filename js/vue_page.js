/* Powered by Sttot, 2021-2-15 14:44:20 */

var headerHTML =
  '<header id="header">\n' +
  '   <h1><a href="index.html">{{ title }}</a></h1>\n' +
  '   <nav id="nav"><ul><li class="special">\n' +
  '       <a href="#menu" class="menuToggle"><span>菜单</span></a>\n' +
  '       <div id="menu"><ul><li v-for="url in urls">\n' +
  '           <a :href="url.url">{{ url.title }}</a>\n' +
  "       </li></ul></div>\n" +
  "   </li></ul></nav>\n" +
  "</header>";

var footerHTML =
  '<footer id="footer">\n' +
  '    <ul class="icons">\n' +
  '        <li><a :href="qqGroupLink" class="icon brands fa-qq"><span class="label">QQ</span></a></li>\n' +
  '        <li><a :href="githubLink" class="icon brands fa-github"><span class="label">GitHub</span></a></li>\n' +
  '        <li><a :href="\'mailto:\' + mailTo" class="icon solid fa-envelope"><span class="label">Email</span></a></li>\n' +
  "    </ul>\n" +
  '    <ul class="copyright">\n' +
  "        <li>Copyright &copy; 2020 - {{thisYear}} NewNanCity. All rights reserved.</li>\n" +
  '        <li>页面模版设计：<a href="http://html5up.net">HTML5 UP</a></li>\n' +
  '        <li>由<a href="https://blog.cubik65536.top/">Cubik65536</a> & <a href="https://github.com/Gk0Wk">Sttot</a>强力驱动</li>\n' +
  '        <li>备案号：<a href="https://beian.miit.gov.cn/" target="_blank">{{ICP_ID}}</a></li>\n' +
  "    </ul>\n" +
  "</footer>";

function buildOnce(genApp, hookDom) {
  var vueInstance = Vue.createApp(
    Object.assign(
      {
        mounted() {
          vueInstance.unmount();
        },
      },
      genApp()
    )
  );
  vueInstance.mount(hookDom);
}

buildOnce(function () {
  return {
    data() {
      return {
        header: headerHTML,
        footer: footerHTML,
      };
    },
  };
}, "#page-wrapper");

buildOnce(function () {
  return {
    data() {
      return {
        title: "朋服",
        urls: [
          {
            url: "https://mc.peng520.xyz\/",
            title: "朋服主页",
          },
          {
            url: "https://status.peng520.xyz/",
            title: "状态监控",
          },
        ],
      };
    },
  };
}, "#header");
