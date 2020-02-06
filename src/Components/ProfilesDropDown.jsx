import React from 'react';
import Loader from 'react-loader-spinner'
import UsersList from './UsersList'
import SearchedUsers  from './SearchedUsers'
import '../index.css'
let loaderStyle = {
    position: "relative",
    left: "40%",
}

class ProfilesDropDown extends React.Component {
    state = { 
        loading: true,
        users: []
     }
    render() {
        return ( 
            <>

            {this.state.loading ? <><Loader color="#007ACC" height={40} width={40} type="TailSpin" style={loaderStyle} /> </> : this.props.searchQuery ? <SearchedUsers toogleDropdown={this.props.toggleProfileDropdown} onClick={this.props.toggleProfileDropdown} userSearch={this.props.searchQuery}/> : this.state.users ? this.state.users
                .map((u, i) => (<UsersList user={u} key={i} onClick={this.props.toggleProfileDropdown} toogleDropdown={this.props.toggleProfileDropdown} />)) : <h4>No users. Try again later</h4>}

            </>
         );
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.fetchingUsers()
        }, 1000)
    }

    fetchingUsers = async() => {
        this.setState({
            loading: true
        })
        let username = "user16"
        let password = "c9WEUxMS294hN6fF"
        let token = btoa(username + ":" + password)
        let response = await fetch("https://strive-school-testing-apis.herokuapp.com/api/profile", {
            method: "GET",
            headers: {
                "authorization" : "Basic " + token
            }
        })
        let usersData = await response.json()
        this.setState({
            loading: false,
            users: usersData

        })
    }
}
 
export default ProfilesDropDown;