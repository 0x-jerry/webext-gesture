import { writeFile } from 'node:fs/promises'
import { version } from '../package.json'

// https://developer.chrome.com/apps/autoupdate#update_manifest

const WEBEXT_APPID = 'headdgefhieejkbjanfhcplbbhjggjof'

const PRIVATE_KEY = process.env.WEBEXT_PRIVATE_KEY

if (PRIVATE_KEY) {
  await writeFile('key.pem', PRIVATE_KEY)
}

await createUpdateYamlFile({
  filename: 'webext-gesture.crx',
  appid: WEBEXT_APPID,
  version
})

async function createUpdateYamlFile(opt: {
  filename: string
  appid: string
  version: string
}) {
  const updateContent = `
<?xml version='1.0' encoding='UTF-8'?>
<gupdate xmlns='http://www.google.com/update2/response' protocol='2.0'>
  <app appid='${opt.appid}'>
    <updatecheck codebase='https://github.com/0x-jerry/webext-gesture/releases/latest/download/${opt.filename}' version='${opt.version}' status='ok' />
  </app>
</gupdate>
    `.trim()

  await writeFile('updates.xml', updateContent)
}
