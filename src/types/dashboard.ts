import type React from 'react';

export interface NavItemType {
  name: string;
  icon: React.ElementType;
  active?: boolean;
  special?: boolean;
}

export interface StatCardType {
  title: string;
  value: string;
  icon: React.ElementType;
  percentage?: number;
  trend: 'up' | 'down';
  iconBgColor: string;
}

export interface SystemAlertType {
  title: string;
  description: string;
  time: string;
  type: 'alert' | 'success';
}

export interface RecentSessionType {
  name: string;
  avatarUrl: string;
  description: string;
}
