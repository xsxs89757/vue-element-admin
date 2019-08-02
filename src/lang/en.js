import { routeEn } from '@/lang/route'
import { tableEn } from '@/lang/table'
import { rulesEn } from '@/lang/rules'
import { commonEn } from '@/lang/common'
export default {
  route: routeEn,
  common: commonEn,
  navbar: {
    logOut: 'Log Out',
    dashboard: 'Dashboard',
    github: 'Github',
    theme: 'Theme',
    size: 'Global Size'
  },
  login: {
    title: 'Login Form',
    logIn: 'Log in',
    username: 'Username',
    password: 'Password',
    confirmPassword: 'ConfirmPassword',
    any: 'any',
    errorEmptyUserName: 'Please enter the correct user name',
    errorEmptyPassWord: 'The password can not be less than 6 digits',
    expireLoginOut: 'You have been logged out, you can cancel to stay on the page, or re-login',
    expireLoginOutTitle: 'Make sure to log out',
    refreshLogin: 'Re login',
    oldPassword: 'Old Password'
  },
  permission: {
    addRole: 'New Role',
    editPermission: 'Edit Permission',
    rolename: 'RoleName',
    rolekey: 'RoleKey',
    permission: 'Permission',
    deleteConfirm: 'Confirm to remove the role?',
    isCheckStrictly: 'CheckStrictly'
  },
  form: {
    deleteConfirm: 'Confirm to remove?',
    deleteSuccess: 'Delete Success',
    actionSuccess: 'Action Success',
    addSuccess: 'Add Success'

  },
  table: tableEn,
  rules: rulesEn,
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name(default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name(default file)'
  },
  pdf: {
    tips: 'Here we use window.print() to implement the feature of downloading pdf.'
  },
  theme: {
    change: 'Change Theme',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  language: {
    switchLanguage: 'Switch Language Success'
  }
}
