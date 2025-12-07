import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function Analytics() {
  return (
    <View style={styles.container}>
      <View style={[styles.cardView, styles.totalView]}>
        <View style={styles.cardTopView}>
          <Text style={styles.cardText}>Total</Text>
          <View style={styles.iconView}>
            <Ionicons
              name='file-tray-full-outline'
              color='#007AFF'
              size={21}
            />
          </View>
        </View>
        <Text style={[styles.cardText, styles.numberText]}>10</Text>
      </View>
      <View style={[styles.cardView, styles.expiredView]}>
        <View style={styles.cardTopView}>
          <Text style={styles.cardText}>Expired</Text>
          <View style={styles.iconView}>
            <Ionicons
              name='ban-outline' 
              color='#FF9500'
              size={21}
            />
          </View>
        </View>
        <Text style={[styles.cardText, styles.numberText]}>1</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    gap: 15,
  },
  cardView: {
    width: 160,
    height: 160,
    borderRadius: 25,
    padding: 15,
    justifyContent: 'space-between',
  },
  cardTopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalView: {
    backgroundColor: '#007AFF',
  },
  expiredView: {
    backgroundColor: '#FF9500',
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
  },
  iconView: {
    width: 32,
    height: 32,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontWeight: 'bold',
  },
});
