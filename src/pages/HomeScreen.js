import React, { useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import lista from '../lista';


function HomeScreen() {
    const navigation = useNavigation();

    const [ ingrediente, setIngrediente ] = useState('');

    useLayoutEffect(()=>{
       navigation.setOptions({
            headerRight:()=> <TouchableOpacity style={styles.botao}
            onPress={add}>
                    <Text style={styles.texto}>Adicionar</Text>
                </TouchableOpacity>                 
       });
    }, [ingrediente]);

    const add = () => {
        lista.push({ingrediente: ingrediente})
        setIngrediente('')
    }

    return (
        <View style={styles.container}>    
            <Text style={styles.titulo}>Faça um Bolo</Text>   
            <TextInput style={styles.input} 
                placeholder="Insira o ingrediente"
                value={ingrediente}
                onChangeText={e=>setIngrediente(e)}
            />
            <ScrollView>
                {lista.map((item, index)=>{
                    return (
                        <View key={index} style={styles.lista}>
                            <Text style={{color:'#FFF'}}>{item.ingrediente}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',      
        backgroundColor: '#444'
    },
    input:{
        width: 300,
        fontSize: 18,
        backgroundColor: '#FFF',
        color: '#000',
        margin: 10
    },
    lista: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        backgroundColor: '#CCC',
        padding: 5,
        
    },
    texto: {
        color: '#0000FF',
        fontSize: 18
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
        margin: 10
    }
});

