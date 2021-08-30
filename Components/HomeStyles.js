import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#0d55f8',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    input: {
        borderBottomColor: '#0d55f8',
        borderBottomWidth: 3,
        marginBottom: 30,
        fontSize: 40,
        color: '#ffffff',

    },
    header: {
        marginTop: 20,
        color: '#346df6',
        fontSize: 50,
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    weatherContainer: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20

    },
    weatherItem: {
        color: '#eee',
        width: 100,
        height: 100,
        fontSize: 20,
        backgroundColor: '#3059f5',
        borderRadius: 10,
        textAlign: 'center',
        paddingTop: 35
    },
    weatherIcon: {
        width: 100,
        height: 100,
        borderRadius: 30
    }
});

export default styles;