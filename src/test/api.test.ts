import { describe, it, expect, vi, beforeEach } from 'vitest';
import { login, getMyInfo } from '../apis';
import { post, getWithAuth } from '../utils/request';
import type { User } from '../types';

// Mock request functions
vi.mock('../utils/request', () => ({
  post: vi.fn(),
  getWithAuth: vi.fn(),
}));

// Mock useUserStore
const mockGetToken = vi.fn();
vi.mock('../store/useUserStore', () => ({
  default: {
    getState: vi.fn(() => ({
      getToken: mockGetToken,
    })),
  },
}));

describe('API functions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('login', () => {
    it('should call post with correct parameters and return token', async () => {
      const mockCode = 'test-code';
      const mockToken = 'test-token';

      // Setup mock response
      vi.mocked(post).mockResolvedValue(mockToken);

      // Execute login
      const result = await login(mockCode);

      // Verify post was called with correct parameters
      expect(post).toHaveBeenCalledWith('/api/v1/user/login', {
        body: {
          code: mockCode,
        },
      });

      // Verify result
      expect(result).toBe(mockToken);
    });
  });

  describe('getMyInfo', () => {
    it('should get token and call getWithAuth with correct parameters', async () => {
      const mockToken = 'test-token';
      const mockUserInfo: Omit<User, 'token'> = {
        avatar: 'https://example.com/avatar.jpg',
        email: 'test@example.com',
        name: 'Test User',
        role: 1,
      };

      // Setup mock responses
      mockGetToken.mockReturnValue(mockToken);
      vi.mocked(getWithAuth).mockResolvedValue(mockUserInfo);

      // Execute getMyInfo
      const result = await getMyInfo();

      // Verify token was retrieved
      expect(mockGetToken).toHaveBeenCalled();

      // Verify getWithAuth was called with correct parameters
      expect(getWithAuth).toHaveBeenCalledWith(
        '/api/v1/user/getMyInfo',
        mockToken
      );

      // Verify result
      expect(result).toEqual(mockUserInfo);
    });
  });
});
