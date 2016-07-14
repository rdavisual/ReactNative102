import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(50,255,0,.5)',
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(250,155,20,.9)',
    },
    container3: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(100,10,200,.8)',
    },
    title: {
        marginTop: 100,
        fontSize: 25,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    botton: {
        width: 300,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginTop: 30
    },
    textButton: {
        color: 'white'
    }
});

export default style;
