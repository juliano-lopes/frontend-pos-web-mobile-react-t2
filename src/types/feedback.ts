export interface FeedbackData {
    name: string;
    email: string;
    message: string;
}

export interface FeedbackFormProps {
    onFeedbackSubmit: (data: FeedbackData) => void;
}