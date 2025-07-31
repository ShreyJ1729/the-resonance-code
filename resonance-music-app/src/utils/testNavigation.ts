// Test utility to verify navigation functionality
import { Category, SubCategory, Track } from '../types';

// Mock data for testing navigation
export const mockCategories: Category[] = [
  {
    id: 'relaxation',
    name: 'Relaxation',
    description: 'Calming sounds for stress relief',
    color: 'primary-500',
    icon: 'wave',
    subCategories: [
      {
        id: 'nature-sounds',
        name: 'Nature Sounds',
        description: 'Peaceful nature recordings',
        color: 'teal-500',
        duration: '30-60 min',
        tracks: [
          {
            id: 'ocean-waves',
            name: 'Ocean Waves',
            description: 'Gentle ocean waves lapping the shore',
            duration: 1800, // 30 minutes
            type: 'Nature',
            bpm: 60
          },
          {
            id: 'forest-rain',
            name: 'Forest Rain',
            description: 'Light rain falling in a peaceful forest',
            duration: 2400, // 40 minutes
            type: 'Nature',
            bpm: 55
          }
        ]
      },
      {
        id: 'meditation',
        name: 'Meditation',
        description: 'Guided meditation sessions',
        color: 'indigo-500',
        duration: '10-45 min',
        tracks: [
          {
            id: 'breathing-exercise',
            name: 'Breathing Exercise',
            description: 'Simple breathing meditation',
            duration: 600, // 10 minutes
            type: 'Guided',
            bpm: 50
          }
        ]
      }
    ]
  },
  {
    id: 'focus',
    name: 'Focus & Concentration',
    description: 'Enhance productivity and mental clarity',
    color: 'amber-500',
    icon: 'brain',
    subCategories: [
      {
        id: 'binaural-beats',
        name: 'Binaural Beats',
        description: 'Scientifically designed frequency patterns',
        color: 'amber-600',
        duration: '25-90 min',
        tracks: [
          {
            id: 'alpha-waves',
            name: 'Alpha Waves',
            description: 'Promote relaxed alertness',
            duration: 3600, // 60 minutes
            type: 'Binaural',
            bpm: 75
          }
        ]
      }
    ]
  }
];

// Test function to verify color classes are working
export function testColorClasses(): boolean {
  try {
    // Import the color utility
    const { getColorClasses } = require('./colorUtils');
    
    // Test each color used in mock data
    const testColors = ['primary-500', 'teal-500', 'indigo-500', 'amber-500', 'amber-600'];
    
    for (const color of testColors) {
      const classes = getColorClasses(color);
      if (!classes.background || !classes.text || !classes.border) {
        console.error(`Missing classes for color: ${color}`);
        return false;
      }
    }
    
    console.log('All color classes are properly configured');
    return true;
  } catch (error) {
    console.error('Error testing color classes:', error);
    return false;
  }
}

// Test navigation flow
export function testNavigationFlow(): void {
  console.log('Testing navigation flow...');
  
  // Test category selection
  const category = mockCategories[0];
  console.log(`Selected category: ${category.name} (${category.color})`);
  
  // Test subcategory selection
  const subCategory = category.subCategories[0];
  console.log(`Selected subcategory: ${subCategory.name} (${subCategory.color})`);
  
  // Test track selection
  const track = subCategory.tracks?.[0];
  if (track) {
    console.log(`Selected track: ${track.name} (${track.duration}s)`);
  }
  
  console.log('Navigation flow test completed');
}