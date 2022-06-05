import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { captureScreen } from "react-native-view-shot";
import { readAsStringAsync } from 'expo-file-system';

import { styles } from "./styles";
import { theme } from "../../theme";
import { FeedbackType } from "../Widget";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { ScreenshotButton } from "../ScreenshotButton";
import { Button } from "../Button";
import { api } from "../../services/api";

interface FormProps {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedBackSent: () => void;
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedBackSent }: FormProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleScreenshot(){
    const newScreenshot = await captureScreen({
      format: 'jpg',
      quality: 0.8
    });

    setScreenshot(newScreenshot);
  }

  function handleScreenshotRemove() {
    setScreenshot(null);
  }

  async function handleSendFeedback() {
    if(isSendingFeedback) {
      return;
    }
    
    setIsSendingFeedback(true);

    const screeshotBase64 = screenshot && readAsStringAsync(screenshot, { encoding: 'base64'});

     try {
       await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screeshotBase64}`,
        comment,
       });

       setIsSendingFeedback(false);

     } catch (error) {
       console.error(error);
     }
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight='bold'
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image
            source={feedbackTypeInfo.image}
            style={styles.image}
          />
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        placeholderTextColor={theme.colors.text_secondary}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        style={styles.input}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          screenshot={screenshot}
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
        />

        <Button 
          title="Enviar Feedback" 
          isLoading={false} 
          onPress={handleSendFeedback}
        />
      </View>
    </View>
  );
}
