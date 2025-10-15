import * as React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const GradientButton = ({ onPress, colors, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
    <LinearGradient colors={colors} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

function SignupScreen({ navigation }) {
  return (
    <LinearGradient colors={["#1a1c2b", "#0b0c16"]} style={styles.container}>
      <Image
        source={{
          uri: "https://generativelanguage.googleapis.com/v1beta/models/image-to-text:generateText",
        }}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <Text style={styles.logoPlaceholderLarge}>C</Text>
      <Text style={styles.appTitleLarge}>ConvoBridge</Text>
      <Text style={styles.screenTitle}>CREATE ACCOUNT</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
        />
      </View>

      <GradientButton
        onPress={() => navigation.navigate("Login")}
        colors={["#5b86e5", "#36d1dc"]}
        title="SIGN UP"
      />

      <Text style={styles.text}>
        Already have an account?{" "}
        <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
          Login
        </Text>
      </Text>
    </LinearGradient>
  );
}


function LoginScreen({ navigation }) {
  const gradientColors = ["#0e0e1a", "#0e0e1a"];
  const buttonColors = ["#36d1dc", "#5b86e5"];

  return (
    <LinearGradient colors={gradientColors} style={styles.container}>
      <Image
        source={{
          uri: "https://generativelanguage.googleapis.com/v1beta/models/image-to-text:generateText",
        }}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <Text style={styles.logoPlaceholderLarge}>C</Text>
      <Text style={styles.appTitleLarge}>ConvoBridge</Text>
      <Text style={styles.screenTitle}>LOG IN</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
        />
      </View>

      <GradientButton
        onPress={() => navigation.navigate("Home")}
        colors={buttonColors}
        title="LOG IN"
      />

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={[styles.text, styles.link, { marginTop: 40, zIndex: 1 }]}>
          Sign Up
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

function HomeScreen({ navigation }) {
  const modules = [
    {
      icon: "video",
      title: "Start Meeting",
      desc: "Host a new video call",
      target: "ActiveCall",
    },
    {
      icon: "account-group",
      title: "Join Meeting",
      desc: "Join with meeting ID",
      target: "JoinMeeting",
    },
    { icon: "translate", title: "Live Translation", desc: "Instant subtitles" },
    { icon: "text-to-speech", title: "Speech to Text", desc: "Transcribe in real time" },
    { icon: "chat-processing", title: "AI Chatbot", desc: "Ask about your meeting" },
    { icon: "file-document", title: "Summaries", desc: "Auto-generated notes" },
  ];

  return (
    <ScrollView style={{ backgroundColor: "#0e0e1a" }}>
      <View style={styles.homeHeader}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/65.jpg" }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Pakeeza Gul</Text>
          <Text style={styles.email}>pakeeza@example.com</Text>
        </View>
      </View>

      <Text style={styles.homeTitle}>Your Tools</Text>

      <View style={styles.grid}>
        {modules.map((m, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => m.target && navigation.navigate(m.target)}
            style={styles.moduleCard}
          >
            <Icon name={m.icon} size={35} color="#36d1dc" />
            <Text style={styles.moduleTitle}>{m.title}</Text>
            <Text style={styles.moduleDesc}>{m.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.logoutBtn}
      >
        <LinearGradient colors={["#C31432", "#240B36"]} style={styles.gradient}>
          <Text style={styles.logoutText}>LOG OUT</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
}

function JoinMeetingScreen({ navigation }) {
  const gradientColors = ["#0e0e1a", "#0e0e1a"];
  const buttonColors = ["#ff512f", "#dd2476"];

  return (
    <LinearGradient colors={gradientColors} style={styles.container}>
      <Text style={styles.screenTitle}>JOIN MEETING</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Meeting ID"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor="#999"
        />
      </View>

      <GradientButton
        onPress={() => navigation.navigate("ActiveCall")}
        colors={buttonColors}
        title="JOIN"
      />
    </LinearGradient>
  );
}

function ActiveCallScreen({ navigation }) {
  const participants = [
    { name: "John Doe", isMain: true },
    { name: "Nicola", flag: "🇩🇪" },
    { name: "Moring", flag: "🇪🇸" },
    { name: "Kinle", flag: "🇰🇷" },
    { name: "Montr", flag: "🇪🇸" },
    { name: "Hapta", flag: "🇵🇱" },
    { name: "English" },
  ];

  const mainParticipant = participants.find((p) => p.isMain) || participants[0];

  return (
    <View style={styles.callContainer}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <Text style={styles.callHeaderName}>{mainParticipant.name}</Text>

        <View style={styles.callGrid}>
          {participants.map((p, i) => (
            <View key={i} style={styles.participantCard}>
              <Image
                source={{
                  uri: `https://randomuser.me/api/portraits/${
                    i % 2 === 0 ? "women" : "men"
                  }/${i + 1}.jpg`,
                }}
                style={styles.videoPlaceholder}
              />
              <View style={styles.participantInfo}>
                <Text style={styles.participantName}>
                  {p.name} {p.flag}
                </Text>
              </View>
              {p.flag && (
                <View style={styles.flagBadge}>
                  <Text style={{ fontSize: 10 }}>{p.flag}</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        <View style={styles.translationBox}>
          <Text style={styles.translationTextSpeaker}>
            Korean: "...global health initiative needs unified effort."
          </Text>
        </View>

        <View style={styles.controlsBar}>
          <TouchableOpacity style={styles.controlButton}>
            <Icon name="microphone-off" size={24} color="#fff" />
            <Text style={styles.controlLabel}>Mute Mic</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Icon name="video" size={24} color="#fff" />
            <Text style={styles.controlLabel}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Icon name="chat" size={24} color="#fff" />
            <Text style={styles.controlLabel}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Icon name="dots-horizontal" size={24} color="#fff" />
            <Text style={styles.controlLabel}>More</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.endCallButtonContainer}>
        <GradientButton
          onPress={() => navigation.navigate("Home")}
          colors={["#ff512f", "#dd2476"]}
          title="END CALL"
        />
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="JoinMeeting" component={JoinMeetingScreen} />
        <Stack.Screen name="ActiveCall" component={ActiveCallScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    opacity: 0.1,
  },
  screenTitle: {
    color: "#aaa",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 40,
    letterSpacing: 2,
    zIndex: 1,
  },
  appTitleLarge: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
    marginBottom: 50,
    letterSpacing: 1,
    zIndex: 1,
  },
  logoPlaceholderLarge: {
    color: "#36d1dc",
    fontSize: 55,
    fontWeight: "900",
    marginBottom: 10,
    zIndex: 1,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
    zIndex: 1,
  },
  input: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "#fff",
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    fontSize: 16,
  },
  btnContainer: {
    width: "100%",
    marginTop: 15,
    borderRadius: 8,
    zIndex: 1,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  text: {
    color: "#aaa",
    marginTop: 20,
    fontSize: 16,
    zIndex: 1,
  },
  link: {
    color: "#36d1dc",
    fontWeight: "bold",
  },
  
  homeHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#151527",
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  name: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  email: { color: "#bbb", fontSize: 13 },
  homeTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  moduleCard: {
    width: "40%",
    backgroundColor: "#1c1c2b",
    margin: 10,
    padding: 18,
    borderRadius: 14,
    alignItems: "center",
  },
  moduleTitle: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  moduleDesc: { color: "#bbb", fontSize: 12, textAlign: "center", marginTop: 4 },
  logoutBtn: { margin: 25 },
  gradient: { padding: 14, borderRadius: 12, alignItems: "center" },
  logoutText: { color: "#fff", fontWeight: "bold" },
});
