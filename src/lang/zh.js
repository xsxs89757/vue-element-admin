import { routeZh } from '@/lang/route'
import { tableZh } from '@/lang/table'
import { rulesZh } from '@/lang/rules'
import { commonZh } from '@/lang/common'
export default {
  route: routeZh,
  common: commonZh,
  navbar: {
    logOut: '退出登录',
    dashboard: '首页',
    github: '项目地址',
    theme: '换肤',
    size: '布局大小'
  },
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    confirmPassword: '确认密码',
    any: '随便填',
    errorEmptyUserName: '请输入正确的用户名(用户名为字母与数字组合)',
    errorEmptyPassWord: '密码不能少于6位数',
    expireLoginOut: '你已被登出，可以取消继续留在该页面，或者重新登录',
    expireLoginOutTitle: '确定登出',
    refreshLogin: '重新登录',
    oldPassword: '旧密码'
  },
  permission: {
    addRole: '新增角色',
    editPermission: '编辑权限',
    rolename: '角色名称',
    rolekey: '角色别名',
    permission: '权限',
    deleteConfirm: '确认删除该权限吗?',
    isCheckStrictly: '子父关联'
  },
  form: {
    deleteConfirm: '确认删除?',
    deleteSuccess: '删除成功',
    actionSuccess: '操作成功',
    addSuccess: '添加成功'

  },
  rules: rulesZh,
  table: tableZh,
  errorLog: {
    tips: '请点击右上角bug小图标',
    description: '现在的管理后台基本都是spa的形式了，它增强了用户体验，但同时也会增加页面出问题的可能性，可能一个小小的疏忽就导致整个页面的死锁。好在 Vue 官网提供了一个方法来捕获处理异常，你可以在其中进行错误处理或者异常上报。',
    documentation: '文档介绍'
  },
  excel: {
    export: '导出',
    selectedExport: '导出已选择项',
    placeholder: '请输入文件名(默认excel-list)'
  },
  zip: {
    export: '导出',
    placeholder: '请输入文件名(默认file)'
  },
  pdf: {
    tips: '这里使用   window.print() 来实现下载pdf的功能'
  },
  theme: {
    change: '换肤',
    documentation: '换肤文档',
    tips: 'Tips: 它区别于 navbar 上的 theme-pick, 是两种不同的换肤方法，各自有不同的应用场景，具体请参考文档。'
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  language: {
    switchLanguage: '切换语言成功'
  }
}
