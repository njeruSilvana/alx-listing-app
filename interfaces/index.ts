export interface CardProps {
  title: string;
  description: string;
  image: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
  featured?: boolean;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

// ============================================
// Booking Related Interfaces
// ============================================

/**
 * Represents the details of a booking
 */
export interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
  propertyImage?: string;
  reviewScore?: number;
  reviewCount?: number;
}

/**
 * Props for the OrderSummary component
 */
export interface OrderSummaryProps {
  bookingDetails: BookingDetails;
}

/**
 * Contact information form data
 */
export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

/**
 * Payment information form data
 */
export interface PaymentInfo {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

/**
 * Billing address form data
 */
export interface BillingAddress {
  streetAddress: string;
  aptSuite?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

/**
 * Complete booking form data
 */
export interface BookingFormData {
  contact: ContactInfo;
  payment: PaymentInfo;
  billing: BillingAddress;
}

/**
 * Props for the BookingForm component
 */
export interface BookingFormProps {
  onSubmit?: (data: BookingFormData) => void;
  isLoading?: boolean;
}

/**
 * Props for the CancellationPolicy component
 */
export interface CancellationPolicyProps {
  freeCancellationDate?: string;
  partialRefundDate?: string;
  rules?: string[];
}

/**
 * Props for the main Booking Page
 */
export interface BookingPageProps {
  bookingDetails: BookingDetails;
}

// ============================================
// Property Related Interfaces (for future use)
// ============================================

/**
 * Represents a property listing
 */
export interface Property {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  reviewCount: number;
  location: string;
  description?: string;
}

/**
 * Represents a review for a property
 */
export interface Review {
  id: string;
  propertyId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

// ============================================
// Utility Types
// ============================================

/**
 * Generic API response wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Pagination metadata
 */
export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

/**
 * Paginated response
 */
export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}