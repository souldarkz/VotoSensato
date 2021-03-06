import { StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import {Dignidades} from "./pantallas/Dignidades";
import {Candidatos} from './pantallas/Candidatos';
import {ListaCandidatos} from './pantallas/ListaCandidatos';
import {cargarConfiguracion} from "./conexion/conexionBdd";
import{Encuestas} from "./pantallas/encuestas"
import {MenuInformacion} from './pantallas/MenuInformacion';
import {ItemSri} from './Menu/ItemSri';
import {ItemJudicatura} from './Menu/ItemJudicatura';
import {ItemTransito} from './Menu/ItemTransito';
import {ItemParticipacionesAnter} from './Menu/ItemParticipacionesAnter';


const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function TabHome() {
  return <Tab.Navigator>
              <Tab.Screen
                name='ListaCandidatosScreen'
                component={ListaCandidatos}
                options= {{
                  tabBarLabel:'ListaCandidatos',
                  tabBarIcon: ()=>(
                    <Icon
                      name='user'
                      size={32}
                      color="skyblue"/>
                  )
                }}>  
              </Tab.Screen> 
              <Tab.Screen
                name='EncuestasScreen'
                component={Encuestas}
                options= {{
                  tabBarLabel:'Encuestas',
                  tabBarIcon: ()=>(
                    <Icon
                      name='user'
                      size={32}
                      color="skyblue"/>
                  )
                }}>  
              </Tab.Screen>

          </Tab.Navigator>
}


export default function App() {

    if(!global.estaCargado){
      cargarConfiguracion();
    };

    return  <NavigationContainer>
                  <HomeStack.Navigator initialRouteName= 'TabHomeScreen'>
                         <HomeStack.Screen 
                              name='TabHomeScreen' 
                              component={TabHome}
                              options={{headerShown:false}}
                          ></HomeStack.Screen>
                         <HomeStack.Screen 
                              name='ListaCandidatosScreen' 
                              component={ListaCandidatos}
                         ></HomeStack.Screen>
                         <HomeStack.Screen 
                              name='CandidatosScreen' 
                              component={Candidatos}
                              options={{headerShown:false}}
                          ></HomeStack.Screen>
                         <HomeStack.Screen 
                              name='DignidadScreen' 
                              component={Dignidades}
                          ></HomeStack.Screen>   
                         <HomeStack.Screen 
                              name='MenuInformacionScreen' 
                              component={MenuInformacion}
                              options={{headerShown:false}}
                         ></HomeStack.Screen>
                         <HomeStack.Screen 
                              name='ItemSriScreen' 
                              component={ItemSri}
                              //options={{headerShown:false}}
                         ></HomeStack.Screen>
                         <HomeStack.Screen 
                              name='ItemJudicaturaScreen' 
                              component={ItemJudicatura}
                              options={{headerShown:false}}
                         ></HomeStack.Screen>
                         <HomeStack.Screen 
                              name='ItemTransitoScreen' 
                              component={ItemTransito}
                              options={{headerShown:false}}
                         ></HomeStack.Screen> 
                         <HomeStack.Screen 
                              name='ItemParticipacionesAnterScreen' 
                              component={ItemParticipacionesAnter}
                              options={{headerShown:false}}
                         ></HomeStack.Screen>     
                  </HomeStack.Navigator>
            </NavigationContainer>
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});