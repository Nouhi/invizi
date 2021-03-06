/*
Copyright (C) 2018-2020 AI Atelier Ltd.

This file is part of Invizi.

Invizi is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or (at
your option) any later version.

Invizi is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with Invizi.  If not, see <https://www.gnu.org/licenses/>.
*/
import OnlineAccountClient from '@/models/OnlineAccountClient'
import TradeClient from '@/components/TradeClient'
import db from '@/components/Database'

let DatabaseHelper = {

  // Reset all data : clear up everything to restart from scratch
  async reset () {
    await TradeClient.table.clear()
    await OnlineAccountClient.table().clear()
    await db.cache.clear()
    await db.password.clear()
    await db.orders.clear()
    await db.assetIndexes.clear()
    await db.addresses.clear()
    await db.coinAttributes.clear()
    await db.coinAttributesDefinition.clear()
    await db.coinLists.clear()
    await db.coinNotes.clear()
    await db.userSettings.clear()
  }
}

export default DatabaseHelper
