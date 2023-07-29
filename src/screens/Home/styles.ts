import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#131016",
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  form: {
    flexDirection: "row",
    gap: 12,
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    flex: 1,
    height: 56,
    color: "#FDFCFE",
    backgroundColor: "#1F1E25",
    borderRadius: 6,
    padding: 16,
    fontSize: 16,
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
    backgroundColor: "#31CF67",
  },
  listEmptyText: {
    color: "#6B6B6B",
    fontSize: 14,
    textAlign: "center",
  },
})
