import React, {useState, useEffect} from 'react';
import { useQuery, useMutation } from '@apollo/client'
import 'semantic-ui-react'
import '../css/styles.css'
import { Card, Segment } from 'semantic-ui-react';
import { QUERY_EVENT } from '../../utils/queries';


const styles = {
    lime: {
        backgroundColor: 'rgb(65, 226, 173)',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'black',
    }
}


const Basketball = () => {
    const navigateToEvents = () => {
        window.location.href='/events'
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
 
         <div className="ui stackable one column grid menu center">
             <h1 className=''>Basketball Events</h1>
             <div></div>
             <button className='ui left labeled icon button' onClick={navigateToEvents}> <i class="backward icon"></i>Back</button>
   <div></div>
   <button className='ui right labeled icon button' onclick="/"> <i className="forward icon"></i>New Event</button>
             <div className="column ">
                 <h1>Today</h1>
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
                 if(EventListItem.sport === 'Basketball') {
                 return (
                     <Segment key={EventListItem._id} style={{ overflow: 'auto', maxHeight: 400 }}>
                     <div className="ui three stackable cards">
                         <Card style={{ backgroundColor: 'lightblue' }} className="ui fluid card">
                             <Card.Header style={{ padding: '10px', marginTop: '10px' }} className='ui centered blue'>{EventListItem.name}</Card.Header>
                             <Card.Content className="content">
                                 <p><strong>Sport: {EventListItem.sport}</strong></p>
                                 <p><strong>Location: {EventListItem.location}</strong></p>
                                 <p><strong>Date: {new Date(EventListItem.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></p>
                             </Card.Content>
                         </Card>
                     </div>
         </Segment>
             )
 } else{
    <h1>No Basketball Events Today...</h1>
 }})}
    
 
 
 
                 </div>
             </div>
             <div className="column ">
                 <h1>Upcoming </h1>
                 <div className=" event">
     
 
 
                 {eventData.filter((EventListItem) => {
                 const eventDate = new Date(EventListItem.date);
                 const today = new Date();
                 return ( 
                     eventDate> today
                 );
             }).map((EventListItem) => {
                 if(EventListItem.sport === 'Basketball') {
                 return (
                     <Segment key={EventListItem._id} style={{ overflow: 'auto', maxHeight: 400 }}>
                     <div className="ui three stackable cards">
                         <Card style={{ backgroundColor: 'lightblue' }} className="ui fluid card">
                             <Card.Header style={{ padding: '10px', marginTop: '10px' }} className='ui centered blue'>{EventListItem.name}</Card.Header>
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

export default Basketball