const { default: ora } = require("ora")

/*
 * @Author: ZL
 * @Date: 2022-05-25 17:34:34
 * @LastEditTime: 2022-05-25 17:52:51
 * @LastEditors: ZL
 * @Description: 
 */
function sleep(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, n)
  })
}

export const loading = async (message, fn, ...args) => {
  const spinner = ora(message)
  spinner.start()
  try {
    let result = await fn(...args)
    spinner.succeed()
    return result
  } catch (error) {
    spinner.fail()
    await sleep(1000)
    // 重复执行
    return loading(message, fn, ...args)
  }
}