import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(50,255,0,.5)',
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
