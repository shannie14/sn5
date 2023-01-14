import React from "react";

import { useEffect, useState } from "react"

const Campaigns = () => {

    const [brands, setBrands] = useState(null)

    //occurs after render
    useEffect(() => {
        const fetchBrands = async () => {
            const response = await fetch('/brands')
            const json = await response.json()

            if (response.ok) {
                setBrands(json)
            }
        }

        fetchBrands()
    }, [])

    return (
      <table cellPadding="0" cellSpacing="0">
          <thead>
              <tr>
                  <th>Client</th>
                  <th>Campaign</th>
                  <th>Launch Date</th>
              </tr>
          </thead>

          <tbody>
              {brands && brands.map((brand) =>
                  <tr>
                      <td>{brand.client}</td>
                      <td>{brand.campaign}</td>
                      <td>{brand.live}</td>
                  </tr>
              )}
          </tbody>
      </table>)
  }

export default Campaigns;