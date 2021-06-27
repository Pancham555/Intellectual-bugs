﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.Globalization;
using TrainingLab.Models;

namespace TrainingLab.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventController : Controller
    {
        SQLiteConnection con = new SQLiteConnection("Data Source=D:\\React\\Perspectify\\Second (Group) project\\My files\\Project 1\\Front-end\\BackEnd\\TrainingLab\\TrainingLab\\TrainingLabDB.db");
        SQLiteCommand cmd = new SQLiteCommand();
        SQLiteCommand cmdd = new SQLiteCommand();        
        SQLiteDataReader dr;

        [HttpGet]
        public EventModel[] Get([FromQuery] string eventName)
        {
            cmd.Connection = con;
            cmdd.Connection = con;
            con.Open();           
            if (eventName == null)
            {
                cmd.CommandText = "select * from Event";
            }
            else
            {
                cmd.CommandText = "select * from Event where EventName='" + eventName + "'";
            }
            dr = cmd.ExecuteReader();
            EventModel[] eventModel = new EventModel[dr.StepCount + 1];
            int i = 0;
            if (dr.HasRows)
            {
                while (dr.Read())
                {
                    eventModel[i] = new EventModel();
                    getEventAttendee(i, eventModel, dr["EventName"].ToString());
                    eventModel[i].Id = int.Parse(dr["Id"].ToString());
                    eventModel[i].EventName = dr["EventName"].ToString();
                    eventModel[i].StartTime = DateTime.UtcNow;
                    eventModel[i].EndTime = DateTime.UtcNow;
                    eventModel[i].Description = dr["Description"].ToString();
                    eventModel[i].EventURL = dr["EventURL"].ToString();                    
                    i++;
                }
            }
            dr.Close();
            con.Close();
            return eventModel;
        }

        [HttpGet("FutureEvents")]
        public EventModel[] GetFutureEvent()
        {

            cmd.Connection = con;
            cmdd.Connection = con;
            con.Open();
            cmd.CommandText = "select * from Event where StartTime>='"+System.DateTime.UtcNow.AddHours(5.50)+"'";       
            dr = cmd.ExecuteReader();
            EventModel[] eventModel = new EventModel[dr.StepCount+1];
            int i = 0;
            if (dr.HasRows)
            {
                while (dr.Read())
                {
                    eventModel[i] = new EventModel();
                    getEventAttendee(i, eventModel, dr["EventName"].ToString());
                    eventModel[i].Id = int.Parse(dr["Id"].ToString());
                    eventModel[i].EventName = dr["EventName"].ToString();
                    eventModel[i].StartTime = DateTime.UtcNow;
                    eventModel[i].EndTime = DateTime.UtcNow;
                    eventModel[i].Description = dr["Description"].ToString();
                    eventModel[i].EventURL = dr["EventURL"].ToString();
                    i++;
                }
            }
            dr.Close();
            con.Close();
            return eventModel;
        }
        
        public async void getEventAttendee(int i,EventModel[] eventModel,string eventName)
        {
            cmdd.CommandText = "select u.FirstName, u.LastName,ea.Panelist from User u inner join EventAttendee ea on u.EmailId=ea.EmailId inner join Event e on e.Id=ea.EventId where e.EventName='" + eventName + "'";
            SQLiteDataReader dr2 = cmdd.ExecuteReader();
            eventModel[i].Panelists = "";
            eventModel[i].Attendee = "";
            if (dr2.HasRows)
            {
                int j = 0;
                while (dr2.Read())
                {
                    if (dr2["Panelist"].ToString() == "True")
                    {
                        if (j != 0 && eventModel[i].Panelists!="")
                        {
                            eventModel[i].Panelists += ",";
                        }
                        eventModel[i].Panelists += dr2["FirstName"] + " " + dr2["LastName"];
                    }
                    else
                    {
                        if (j != 0 && eventModel[i].Attendee!="")
                        {
                            eventModel[i].Attendee += ",";
                        }
                        eventModel[i].Attendee += dr2["FirstName"] + " " + dr2["LastName"];
                    }
                    j++;
                }
            }
            dr2.Close();
        }
    }
}
