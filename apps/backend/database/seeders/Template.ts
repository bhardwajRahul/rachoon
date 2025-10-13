import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Template from 'App/Models/Template'
import fs from 'fs'
export default class extends BaseSeeder {
  public async run() {
    const template = new Template()

    const file = __dirname + '/defaultTemplate.html'

    const html = fs.readFileSync(file, 'utf8')

    const exists = await Template.query().getCount()
    if (Number(exists) > 0) {
      return
    }

    template.fill({
      title: 'Initial Template',
      data: {
        colors: {
          border: '#E6E9EF',
          primary: '#179299',
          bodyText: '#1E1E2E',
          secondary: '#179299',
          footerText: '#CDD6F4',
          headerText: '#1E1E2E',
          footerBackground: '#1E1E2E',
          headerBackground: '#E6E9EF',
          tableOddBackground: '#FFFFFF',
          tableEvenBackground: '#E6E9EF',
        },
        columns: { first: '', third: '', fourth: '', second: '' },
      },
      thumbnail: '',
      default: true,
      html: html,
    })
    await template.save()
  }
}
