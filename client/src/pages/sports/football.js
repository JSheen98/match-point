import React, {useState, useEffect} from 'react';
import { useQuery, useMutation } from '@apollo/client'
import 'semantic-ui-react'
import '../css/styles.css'
import { Card, Segment } from 'semantic-ui-react';
import { QUERY_EVENT } from '../../utils/queries';
import Auth from '../../utils/auth';


const styles = {
    lime: {
        backgroundColor: 'rgb(65, 226, 173)',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'black',
        margin: '25px',
    },
    black: {
        color: 'rgb(65, 226, 173)',
        backgroundColor: 'black'
    },
    bord: {
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'black',
       margin: '5px'
    },
    cards: {
        overflow: 'auto',
        maxHeight: 400,
        backgroundColor: 'rgb(65, 226, 173)',
        display: 'flex',
        justifyContent: 'center'

    }
}

const Football = () => {
    const navigateToEvents = () => {
        window.location.href='/events'
     };

     const navigateToAddEvent = () => {
        Auth.loggedIn() ?

        ( window.location.href= '/event') : 
        ( window.location.href= '/login')

    };
 
     const [event, setEvent] = useState([]);
     const { loading, data } = useQuery(QUERY_EVENT)
     const eventData = data?.events || []
     useEffect(() => {
       console.log(data)
         
     }, [data])
     
 
 
     const addEventItem = (item) => {
         console.log(item);
         if (!item.text) {
             return;
         }
         const newEvent = [item, ...event];
         console.log(newEvent);
 
         setEvent(newEvent);
     };
 
     if (loading) {
         return <h2>Loading Profile...</h2>
     }
 
     return (
 
         <div style={styles.lime} className="ui stackable one column grid menu center">
             <h1 className=''>Football Events</h1>
             <div></div>
             <button className='ui left labeled black icon button' style={styles.bord} onClick={navigateToEvents}> <i class="backward icon"></i>Back</button>
   <div></div>
   <button className='ui right labeled icon black button' style={styles.bord} onClick={navigateToAddEvent}> <i className="forward icon"></i>New Event</button>
             <div style={styles.black} className="column ">
                 <h1>Today:</h1>
                 <div className="event">
                     
 
             {eventData.filter((EventListItem) => {
                 const eventDate = new Date(EventListItem.date);
                 const today = new Date();
                 return (
                     eventDate.getFullYear() === today.getFullYear() &&
                     eventDate.getMonth() === today.getMonth() &&
                     eventDate.getDate() === today.getDate()
                 );
             }).map((EventListItem) => {
                 if(EventListItem.sport === 'Football') {
                 return (
                     <Segment key={EventListItem._id} style={{ overflow: 'auto', maxHeight: 400, backgroundColor: 'rgb(65, 226, 173)' }}>
                     <div style={styles.cards} className="ui three stackable cards">
                         <Card style={{backgroundColor: 'white', color: 'black'}} className="ui fluid card">
                             <Card.Header style={{ padding: '20px', backgroundColor: 'black' , color: 'rgb(65, 226, 173)' }} className='ui centered '>{EventListItem.name}</Card.Header>
                             <Card.Content className="content">
                                 <p><strong>Sport: {EventListItem.sport}</strong></p>
                                 <p><strong>Location: {EventListItem.location}</strong></p>
                                 <p><strong>Date: {new Date(EventListItem.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></p>
                             </Card.Content>
                         </Card>
                     </div>
         </Segment>
             )
 }})}
    
 
 
 
                 </div>
             </div>
             <div style={styles.black} className="column ">
                 <h1>Upcoming: </h1>
                 <div className=" event ">
     
 
 
                 {eventData.filter((EventListItem) => {
                 const eventDate = new Date(EventListItem.date);
                 const today = new Date();
                 return ( 
                     eventDate> today
                 );
             }).map((EventListItem) => {
                 if(EventListItem.sport === 'Football') {
                 return (
                     <Segment key={EventListItem._id} style={{ overflow: 'auto', maxHeight: 400,  backgroundColor: 'rgb(65, 226, 173)' }}>
                     <div style={styles.cards} className="ui three stackable cards">
                         <Card style={{ backgroundColor:'white', color: 'black' }} className="ui fluid card">
                             <Card.Header style={{ padding: '20px', backgroundColor: 'black' , color: 'rgb(65, 226, 173)' }} className='ui centered '>{EventListItem.name}</Card.Header>
                             <Card.Content className="content">
                                 <p><strong>Sport: {EventListItem.sport}</strong></p>
                                 <p><strong>Location: {EventListItem.location}</strong></p>
                                 <p><strong>Date: {new Date(EventListItem.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></p>
                             </Card.Content>
                         </Card>
                     </div>
         </Segment>
             )
 }})}
    
 
 
 
                 </div>
             </div>
             
 
 
 
         </div>
 
 
     )
 


};

export default Football