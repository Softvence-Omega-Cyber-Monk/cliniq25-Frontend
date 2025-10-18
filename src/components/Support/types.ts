import React from 'react';

export interface ContactDetail {
  icon: React.ElementType;
  title: string;
  description: string;
  actionText: string;
  detail: string; // Used for email or phone number display
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface ResourceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}
