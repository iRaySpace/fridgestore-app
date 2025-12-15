import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export interface LoadingProps {
    value: boolean;
    children: React.ReactNode;
}

export function Loading({ value, children }: LoadingProps) {
    if (!value) {
        return children;
    }
    return (
        <View>
            <ActivityIndicator />
        </View>
    );
}
