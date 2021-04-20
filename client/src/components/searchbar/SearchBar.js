import React, { Component } from "react";
import './SearchBar.css'

export class SearchBar extends Component {

    render() {
      return (
      <div className="Searchbar_nav">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div id="cover">
          <form method="get" action="" className="form_search">
            <div class="search_div">
              <div class="input_box">
                <input type="text" placeholder="Search Kurakoo" className="input_class" required />
              </div>
              <div class="search_div" id="s-cover">
                <button type="submit" className="btn_class">
                <div id="s-circle"></div>
                <span></span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      );
    }
  }

//export default SearchBar;