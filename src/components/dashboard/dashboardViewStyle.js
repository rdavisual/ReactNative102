import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    backgroundImage: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        height: 150
    },
    rightContainer: {
        backgroundColor: 'rgba(52,52,52,.5)',
        alignSelf: 'stretch',
        paddingTop: 30,
        height: 150
    },
    title: {
        fontSize: 27,
        marginBottom: 8,
        textAlign: 'center',
        color: '#FFF',
        backgroundColor: 'rgba(52,52,52,0)'
    },
    available: {
        fontSize: 18,
        textAlign: 'center',
        color: '#FFF',
        backgroundColor: 'rgba(52,52,52,0)'
    },
    ListView: {
        paddingTop: 64,
        marginBottom: 49,
    },
    loading: {
        fontSize: 27,
        color: '#000',
    }
});

export default style;
