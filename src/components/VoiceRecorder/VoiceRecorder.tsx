import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { IconButton } from '@mui/material';
import StopIcon from '@mui/icons-material/Stop';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
const VoiceRecorder=({message,setMessage}:{message:string,setMessage: Dispatch<SetStateAction<string>>})=>{

    const [isListening, setIsListening] = useState<boolean>(false);
    const recognitionRef = useRef<InstanceType<typeof webkitSpeechRecognition> | null>(null);

    useEffect(()=>{
        if (!('webkitSpeechRecognition' in window)) {
            console.error('Speech recognition not supported in this browser.');
            return;
        }

        recognitionRef.current = new window.webkitSpeechRecognition();
        const recognition = recognitionRef.current;
        recognition.continuous = true; // Keep listening until stopped
        recognition.interimResults = true; // Show interim results
        recognition.lang = 'en-US'; // Set language

        recognition.onstart = () => {
            setIsListening(true);
            console.log('Speech recognition started');
        };

        recognition.onresult = (event: SpeechRecognitionEvent) => {
            let finalTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
              const transcriptSegment = event.results[i][0].transcript;
              if (event.results[i].isFinal) {
                finalTranscript += transcriptSegment;
              }
            }
            setMessage(prev => prev + finalTranscript); 
           
        };

        recognition.onerror = (event: SpeechRecognitionError) => {
            console.error('Speech recognition error:', event.error);
        };

        recognition.onend = () => {
            setIsListening(false);
            console.log('Speech recognition ended');
            
        };
        
    },[])

    const startListening = () => {
        if (recognitionRef.current && !isListening) {
          recognitionRef.current.start();
        }
    };

    const stopListening = () => {
        if (recognitionRef.current && isListening) {
          recognitionRef.current.stop();
        }
    };

    return(
        <>
            <div>

                {
                    isListening?(
                        <>
                            <IconButton onClick={()=>stopListening()} >
                            <StopIcon sx={{color:"white",fontSize:30}} />
                            </IconButton>
                        </>
                    ):(
                        <>
                        <IconButton onClick={()=>startListening()} >
                            <KeyboardVoiceIcon sx={{color:"white",fontSize:30}} />
                        </IconButton>
                        </>
                    )
                }
                
            </div>
        </>
    )
}

export default VoiceRecorder