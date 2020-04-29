import React from 'react';

import '../Collection.css';
import CollectionItem from "./CollectionItem"

import collectionInit from "../collection.json"
import Toolbar from './Toolbar';
import Sortbar from './Sortbar';

class Collection extends React.Component {

  constructor(){
    super()
    
    this.editPoster = this.editPoster.bind(this)
    this.removePoster = this.removePoster.bind(this)
    this.addPoster = this.addPoster.bind(this)
    this.searchPoster = this.searchPoster.bind(this)
    this.sortPosters = this.sortPosters.bind(this)
    
    this.state = {}
    this.state.posters = collectionInit.posters
    this.state.filteredPosters = null
    this.state.searchFilter = ""
    this.state.sortDir = true
  }

  addPoster = () => {
    this.setState({posters: 
        this.state.posters.concat([
            {
                id: this.state.posters.length+1,
                name: "Sample Poster Name",
                description:"Sample Poster Description",
                image:"",
                rating: 0
            }
        ])})
  }
  removePoster = (id) => {
    this.state.posters.forEach(element => {
      console.log(element.id)
    });
    console.log()
    const filtered = this.state.posters.filter(poster => poster.id !== id);
    this.setState({posters: filtered});
  }

  searchPoster = ({target}) => {
    if(target.value!=="" && target.value!==null){
      let filtered_name = this.state.posters.filter(e => e.name.toString().toLowerCase().includes(target.value.toLowerCase()));
      let filtered_description = this.state.posters.filter(e => e.description.toString().toLowerCase().includes(target.value.toLowerCase()));
      let filtered_rating = this.state.posters.filter(e => e.rating.toString().toLowerCase().includes(target.value.toLowerCase()));
      let filtered = filtered_name.concat(filtered_description.concat(filtered_rating))
      filtered = filtered.filter(function(item, pos) {
        // eslint-disable-next-line
        return filtered.indexOf(item) == pos;
      })
      this.setState({filteredPosters: filtered})
    }else{
      this.setState({filteredPosters: null})
    }
  }
  editPoster = ({target}) => {
    this.setState({posters: this.state.posters.map(poster=>{
      //eslint-disable-next-line
      if(poster.id == target.id){
          let modifiedPoster = Object.assign({}, poster);
          switch(target.name){
            case "name":
              modifiedPoster.name = target.value
            break;
            case "description":
              modifiedPoster.description = target.value
            break;
            case "rating":
              modifiedPoster.rating = target.value
            break;
            default: modifiedPoster.name = poster.name
          }
          return modifiedPoster
      }else return poster;
    })});
  }
  sortPosters(index){
    let sorted = []
    let toSort = []

    if(this.state.filteredPosters===null){
      toSort = this.state.posters
    }else{
      toSort = this.state.filteredPosters
    }

    let dir = this.state.sortDir
    
    sorted = toSort.sort(function(a, b) {
      if(dir){
        return Object.values(a)[index]>Object.values(b)[index] ? 1:-1//return Object.values(a)[index].toString().localeCompare( Object.values(b)[index].toString())
      }else{
        return Object.values(b)[index]>Object.values(a)[index] ? 1:-1//return Object.values(b)[index].toString().localeCompare( Object.values(a)[index].toString())
      }
    })

    this.setState({sortDir:!dir})

    if(this.state.filteredPosters===null){
      this.setState({posters:sorted})
    }else{
      this.setState({filteredPosters:sorted})
    }
    
  }
  

  render(){
    let toDisplay = []
    if(this.state.filteredPosters!==null){
      toDisplay = this.state.filteredPosters.map(item => <CollectionItem key={item.id} item={item} onChangeFunction={this.editPoster} onRemovePoster={this.removePoster}/>)
    }else{
      toDisplay = this.state.posters.map(item => <CollectionItem key={item.id} item={item} onChangeFunction={this.editPoster} onRemovePoster={this.removePoster}/>)
    } 
    return (
      <div className="collection">
        <Toolbar onAddPoster={this.addPoster} onFilter = {this.searchPoster}/>
        <Sortbar onSort={this.sortPosters}/>
        {toDisplay}
      </div>
    )
  }
  
}

export default Collection;
