# Load in clean data 
import pandas as pd 
import datetime
from dateutil.relativedelta import relativedelta
import bisect 
import json 
import numpy as np 
from scipy import stats

data = pd.read_csv('C:\\Users\\mandy\\Desktop\\Gift the Code\\GTC_Mockdata_Event.csv')

global data

def getMonthYear(date, axis):
    date1 = pd.to_datetime(date)
    axis2 = axis.copy()
    bisect.insort(axis2, date1)
    return(axis[axis2.index(date1) - 1])

def user_graph(id):
    df = data.copy(deep = True) 
    
    # Axis: current month and go back 12 months -> find highest month 
    df['Event Date'] = pd.to_datetime(df['Event Date'], format = '%m/%d/%Y')  
    most_recent_event = max(df['Event Date'])
    earliest_event = most_recent_event + relativedelta(months =-12)  
    axis = [] 
    i = earliest_event
    delta = relativedelta(months=1)
    while i <= most_recent_event: 
        axis.append(i) 
        i += delta
    
    # Total Event Attendees
    df['Interval'] = df.apply(lambda x: getMonthYear(x['Event Date'], axis), axis = 1)
    df_all = df[(df['Attended'] == 1)].copy(deep = True) 
    df_all = df_all.groupby('Interval')['Event Name'].count() 
    df_all.columns = ['Attendees']

    # Total Events User Attended
    df_attend = df[(df['MemberNum'] == id) & (df['Attended'] == 1)].copy(deep = True) 
    df_attend = df_attend.groupby('Interval')['Event Name'].count() 
    df_attend.columns = ['Events Attended']

    # Total Events User Registered
    df_reg = df[(df['MemberNum'] == id)].copy(deep = True) 
    df_reg = df_reg.groupby('Interval')['Event Name'].count() 
    df_reg.columns = ['Events Registered']
    
    # What quantile does this user belong in? 
    df_other = data.copy(deep = True)
    df_other = df_other.groupby('MemberNum')['Event Name'].count()
    qq_list = df_other.values.flatten()
    percentile = stats.percentileofscore(qq_list, sum(df_attend))
    
    return [axis, df_all, df_attend, df_reg, percentile]    
    
# Converting this to JSON test

line0 = pd.DataFrame({'Interval':user_graph('16461202-6700')[0]}).to_json(orient='records')         
line1 = user_graph('16461202-6700')[1].reset_index().to_json(orient='records')
line2 = user_graph('16461202-6700')[2].reset_index().to_json(orient='records')
line3 = user_graph('16461202-6700')[3].reset_index().to_json(orient='records')

with open('C:\\Users\\mandy\\Desktop\\Gift the Code\\data.json', 'w') as outfile:
    json.dump(line0, outfile)
    outfile.write('\n')
    json.dump(line1, outfile)
    outfile.write('\n')
    json.dump(line2, outfile) 
    outfile.write('\n')
    json.dump(line3, outfile) 

##################

def program_graph(id): 
    df = data.copy(deep = True) 
    
    # Axis: current month and go back 12 months -> find highest month 
    df['Event Date'] = pd.to_datetime(df['Event Date'], format = '%m/%d/%Y')  
    most_recent_event = max(df['Event Date'])
    earliest_event = most_recent_event + relativedelta(months =-12)  
    axis = [] 
    i = earliest_event
    delta = relativedelta(months=1)
    while i <= most_recent_event: 
        axis.append(i) 
        i += delta
    
    # All events 
    df['Interval'] = df.apply(lambda x: getMonthYear(x['Event Date'], axis), axis = 1)
    df_all = df[(df['Attended'] == 1)].copy(deep = True) 
    df_all = df_all.groupby('Interval')['Event Name'].count() 
    df_all.columns = ['Attendees']
        
    # Total Event Registered
    df_reg = df[(df['EventID'] == id)].copy(deep = True) 
    df_reg = df_reg.groupby('Interval')['Event Name'].count() 
    df_reg.columns = ['Number Registered']
    
    # Total Event Attended
    df_attend = df[(df['EventID'] == id) & (df['Attended'] == 1)].copy(deep = True) 
    df_attend = df_attend.groupby('Interval')['Event Name'].count() 
    df_attend.columns = ['Number Attended']
        
    # What quantile does this user belong in? 
    df_other = data.copy(deep = True)
    df_other = df_other.groupby('EventID')['Event Name'].count()
    qq_list = df_other.values.flatten()
    percentile = stats.percentileofscore(qq_list, sum(df_attend))
    return [axis, df_all, df_attend, df_reg, percentile] 
        
def program_relationship_graph(id1,id2): 
    # Find the number of people who attended both events 
    # Find the number of people who registered for both events 
    R1 = data.ix[(data['EventID'] == id1)]['MemberNum'] 
    R2 = data.ix[(data['EventID'] == id2)]['MemberNum']
    registered = len(R2[R2.isin(R1)])
    # Find the number of people who attended both events 
    A1 = data.ix[(data['EventID'] == id1) & (data['Attended'] == 1)]['MemberNum'] 
    A2 = data.ix[(data['EventID'] == id2) & (data['Attended'] == 1)]['MemberNum']
    attended = len(A2[A2.isin(A1)])
    return (attended, registered) 
    
