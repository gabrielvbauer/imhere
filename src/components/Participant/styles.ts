import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "#FDFCFE",
    marginLeft: 16,
  },
  buttonText: {
    color: "#FDFCFE",
    fontSize: 24,
    lineHeight: 24,
  },
  button: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    backgroundColor: "#E23C44",
  },
})
