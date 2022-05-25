/*
 * @Author: ZL
 * @Date: 2022-05-25 17:32:44
 * @LastEditTime: 2022-05-25 18:24:33
 * @LastEditors: ZL
 * @Description: 
 */
const path = require('path')
const fs = require('fs-extra')
const Inquirer = require('inquirer')
const { loading } = require('./utils')

export const handle = async (projectName, options) => {
  const cwd = process.cwd()
  const targetDir = path.join(cwd, projectName)

  if (fs.existsSync(targetDir)) {
    if (options.force) {
      await fs.remove(targetDir)
    } else {
      let { isOverwrite } = await Inquirer.prompt([
        {
          name: 'isOverwrite',
          type: 'list',
          message: "Target directory exists, Please choose an action",
          choices: [
            { name: "覆盖", value: true },
            { name: "取消并退出", value: false },
          ],
        }
      ])
      if (!isOverwrite) {
        console.log('退出');
        return
      } else {
        await loading(
          '正在删除目标目录...',
          fs.remove,
          targetDir
        )
      }
    }
  }
  // 创建项目逻辑
}