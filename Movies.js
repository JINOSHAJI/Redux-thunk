import React from 'react';
import { FlatList, ActivityIndicator, Text,Button,TextInput, View  } from 'react-native';
import {connect} from 'react-redux';
import * as actionTypes from './src/store/actions/actionType';
import * as counterActions from './src/store/actions/index';

class Movies extends React.Component{
    state={count:0,
      title:'',
      releaseYear:'',
    };
     
    movieAddedHandler = () => {
      this.props.onAddMovie(this.state.title,this.state.releaseYear);
    };
    componentDidMount(){
      this.props.onGetMovies();
    };
    render(){
     
        if(this.props.isLoading){
      return(
        <View style={{flex: 1, padding: 40}}>
          <ActivityIndicator/>
        </View>
      )
    }
        return(
            <View style={{flex: 1, paddingTop:40}}>
            <TextInput  value={this.state.title} onChangeText={(title)=>{this.setState({
              title:title
            })}} />

            <TextInput  value={this.state.releaseYear} onChangeText={(releaseYear)=>{this.setState({
              releaseYear:releaseYear
            })}} />
            <Button onPress={this.movieAddedHandler} title="Add movie" />
 

            <FlatList
              data={this.props.moviesData}
                 renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                 keyExtractor={(item, index) => index}
            />
                    </View>
        );
    }
}



const mapStateToProps =  (state) =>{
  console.log('state'); 
  console.log(state); 
  return{
      
      moviesData:state.MovieReducer.movies,
      isLoading:state.MovieReducer.isLoading,
  };
}

const mapDispatchToProps = (dispatch) =>{
return {
  // onAddMovie:() => dispatch(counterActions.addMovie('New Movie redux')),
   onAddMovie: (title,releaseYear) => dispatch(counterActions.addMovie(title,releaseYear)),
   onGetMovies:()=> dispatch(counterActions.getMovies())
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Movies);
