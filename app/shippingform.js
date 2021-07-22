import React from 'react';

class App extends React.Component {
	constructor(props) {
      super(props);
		
      this.state = {
		 message: "init",
		 data: 
         {
		    "fname":"First Name",
			"lname":"Last Name",
			"email":"abc@xyz.com",
			"address":"",
			"number":"99xxxxxxxx",
			"country":[{"name":"India","seleted":""},{"name":"China","seleted":"seleted"},{"name":"USA","seleted":""}],
			"gift":"true"
		 }
      }
	  
	 // this.updateMessage = this.updateMessage.bind(this);	
   }
	updateMessage(e) {     
	    console.log(e);
		console.log(e.target);
		console.log(e.target.value);
        this.setState({message: e.target.value});   
    }   
	
	
   render() {
      return (
        
	  
         <div>
		 
		  
            <Header/>
       
	   {/*<input type='text' 
            onChange={this.updateMessage}         
            value={this.state && this.state.message || ''}      
	   />*/}   
			
			 <form action="/action_page.php" method="post">
				<table>
					<tbody>
					
					<tr>
						<td></td>
						<td><input type="text" name="fname" value={this.state && this.state.data.fname || ''}/>&nbsp;<input type="text" name="lname" value={this.state && this.state.data.lname || ''}/></td>
						<td></td>
					</tr>
					<tr>
						<td className="rightalign">Email</td>
						<td><input type="text" name="email" value={this.state && this.state.data.email || ''}/></td>
						
					</tr>
					
					
					<tr>
						<td className="righttopalign">Address</td>
						<td><textarea name="address" rows="10" cols="30"></textarea></td>
					</tr>	
					<tr>
						<td>Phone</td>
						<td><input type="text" name="number" value="99xxxxxxxx"/></td>
					</tr>	
					<tr>
						<td>Country</td>
						<td><select name="country">
						    {this.state.data.country.map((countryrow, i) => <CountrySelectRow key = {i} data = {countryrow}/>)}
							</select>
						</td>
					</tr>	
					<tr>
						<td></td>
						<td><input type="checkbox" name="gift" checked/> This is gift</td>
					</tr>
					<tr>
						<td></td>
						<td><input type="submit" name="submit" value="Submit"/></td>
					</tr>					
						
						
						
					</tbody>
				</table>
			
				
			 </form> 
			
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1></h1>
         </div>
      );
   }
}

class CountrySelectRow extends React.Component {
   render() {
      return (
	    <option value={this.props.data.name} seleted={this.props.data.seleted} >{this.props.data.name}</option>
      );
   }
}

export default App;