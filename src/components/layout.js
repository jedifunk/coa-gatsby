import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle={"Choosing Our Adventure"} />
      <div id="content" className="site-content">
          {children}
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
