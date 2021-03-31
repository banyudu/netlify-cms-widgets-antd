import './bootstrap.js'
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'
import { Input } from '../src'

const config = {
  backend: {
    name: 'test-repo',
    login: false,
  },
  media_folder: 'assets',
  collections: [{
    name: 'test',
    label: 'Test',
    files: [{
      file: 'test.yml',
      name: 'test',
      label: 'Test',
      fields: [{
        name: 'input',
        label: 'Input Widget',
        widget: 'input'
      }, ],
    }],
  }],
}

CMS.registerWidget('input', Input.Control, Input.Preview)

init({ config })
