import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const GuestsScreen = (props) => {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.adultText}>Adults</Text>
                        <Text style={styles.agesText}>Ages 13 or above</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.button} onPress={() => setAdults(Math.max(0, adults - 1))}><Text style={styles.buttonText}>-</Text></Pressable>
                        <Text style={styles.buttonCounter}>{adults}</Text>
                        <Pressable style={styles.button} onPress={() => setAdults(adults + 1)}><Text style={styles.buttonText}>+</Text></Pressable>
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.adultText}>Children</Text>
                        <Text style={styles.agesText}>Ages 2-12</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.button} onPress={() => setChildren(Math.max(0, children - 1))}><Text style={styles.buttonText}>-</Text></Pressable>
                        <Text style={styles.buttonCounter}>{children}</Text>
                        <Pressable style={styles.button} onPress={() => setChildren(children + 1)}><Text style={styles.buttonText}>+</Text></Pressable>
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.adultText}>Infants</Text>
                        <Text style={styles.agesText}>Ages under 2</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.button} onPress={() => setInfants(Math.max(0, infants - 1))}><Text style={styles.buttonText}>-</Text></Pressable>
                        <Text style={styles.buttonCounter}>{infants}</Text>
                        <Pressable style={styles.button} onPress={() => setInfants(infants + 1)}><Text style={styles.buttonText}>+</Text></Pressable>
                    </View>
                </View>
            </View>
            <View>
                <Pressable style={styles.buttonContinue} onPress={() => navigation.navigate("Home", {
                    screen: "Explore",
                    params: {
                        screen: "Search Results"
                    }
                })}>
                    <Text style={styles.textContinue}>Search</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default GuestsScreen;
