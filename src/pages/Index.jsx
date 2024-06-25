import React, { useState } from "react";
import { Box, Container, VStack, Heading, Image, Input, Button, Text, SimpleGrid } from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa";

const Index = () => {
  const [photos, setPhotos] = useState([]);
  const [newPhotoUrl, setNewPhotoUrl] = useState("");

  const handleAddPhoto = () => {
    if (newPhotoUrl) {
      setPhotos([...photos, newPhotoUrl]);
      setNewPhotoUrl("");
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box bg="blue.500" color="white" py={4}>
        <Container maxW="container.xl">
          <Heading size="lg">PhotoShare</Heading>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Photo Upload Form */}
          <Box bg="gray.100" p={4} borderRadius="md">
            <VStack spacing={4}>
              <Heading size="md">Share a New Photo</Heading>
              <Input
                placeholder="Enter photo URL"
                value={newPhotoUrl}
                onChange={(e) => setNewPhotoUrl(e.target.value)}
              />
              <Button leftIcon={<FaCamera />} colorScheme="blue" onClick={handleAddPhoto}>
                Add Photo
              </Button>
            </VStack>
          </Box>

          {/* Photo Feed */}
          <Box>
            <Heading size="md" mb={4}>Photo Feed</Heading>
            {photos.length === 0 ? (
              <Text>No photos shared yet. Be the first to share!</Text>
            ) : (
              <SimpleGrid columns={[1, 2, 3]} spacing={4}>
                {photos.map((photo, index) => (
                  <Image key={index} src={photo} alt={`User photo ${index + 1}`} borderRadius="md" />
                ))}
              </SimpleGrid>
            )}
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;