import Format from '@repo/common/Format'
import Client from 'App/Models/Client'
import InvoiceOrOffer from 'App/Models/InvoiceOrOffer'
import User from 'App/Models/User'

export default class Numberervice {
  public static async invoiceOrOffer(user: User, type: string) {
    const count = await InvoiceOrOffer.query()
      .where({
        organizationId: user?.organizationId,
        type: type.toLowerCase(),
      })
      .withTrashed()
      .getCount()

    const io =
      type === 'invoice'
        ? user.organization.settings.invoices.number
        : user.organization.settings.offers.number

    return Format.number(io, Number(count))
  }

  public static async client(user: User) {
    const count = await Client.query()
      .where({
        organizationId: user?.organizationId,
      })
      .withTrashed()
      .getCount()

    return Format.number(user.organization.settings.clients.number, Number(count))
  }
}
