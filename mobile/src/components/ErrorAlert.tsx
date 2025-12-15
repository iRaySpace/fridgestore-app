import { View, Text, StyleSheet } from "react-native";

export interface ErrorAlertProps {
    errors: string[];
}

export function ErrorAlert({ errors }: ErrorAlertProps) {
    if (errors.length == 0) {
        return <></>;
    }
    return (
        <View style={styles.errorView}>
            <Text style={styles.errorText}>You encountered error(s):</Text>
            {errors.map(error => (
                <Text style={styles.errorText} key={error}>- {error}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    errorView: {
        backgroundColor: '#ffe4e6',
        padding: 15,
    },
    errorText: {
        color: '#dc2626',
    },
});